import React, {useRef, useEffect, useState} from 'react';
import Guestbook from './Guestbook';
import update from 'react-addons-update';
import './assets/scss/App.scss';

export default function App() {
    const outterRef = useRef(null);
    const innerRef = useRef(null);
    const [items, setItems] = useState([]);
    const [no, setNo] = useState();

    let isFetching = false;

    const fetchMessage = async function () {
        console.log('[ex01. Enter]', ' Fetching');
        if(isFetching === true) {
            console.log('[Prevent]', ' Fetching -------');
            return;
        }

        isFetching = true;
        console.log('[02.Start]', ' Fetching');

        const startNo = items.length === 0 ? 0 : items[items.length-1].no;

        try {
            const response = await fetch(`/api/${startNo}`, {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'applcation/json'
                }
            });

            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();
            if (json.result !== 'success') {
                throw json.message;
            }

            // setMessages([...messages, ...json.data]);
            json.data.length > 0 && setItems([...items, ...json.data]);
            console.log('[03End]', ' Fetching');
            isFetching = false;
        } catch (err) {
            console.error(err);
        }
    }

    useEffect( async () => {
        fetchMessage();
    }, []);

    
    const notifyItem = {
        add: async function(name, password, message){ 
            try {
                const url = `/api`;
                const item = {
                    no: null,
                    name: name,
                    password: password,
                    message: message,
                    done: false
                }

                const response = await fetch(url, {
                    method:'post',
                    headers:{'Content-Type': 'application/json'},
                    body: JSON.stringify(item)
                });
    
                if(!response.ok) {
                    throw new Error(`${response.status} ${response.statusText}`);
                }
    
                const json = await response.json();
                if(json.result !== 'success'){
                    throw new Error(`${json.result} ${json.message}`);
                }

                const newItems = [json.data].concat(items);
                setItems(newItems);

            } catch(err) {
                console.error(err);
            }
        },

        del: async function( itemNo, password ){
            try{
                const url = `/api/${ itemNo }`;
                const item = {
                    no: null,
                    password: password,
                    done: false
                }

                const response = await fetch(url, {
                    method:'delete',
                    headers:{'Content-Type': 'application/json'},
                    body: JSON.stringify(item)
                });

                if(!response.ok) {
                    throw new Error(`${response.status} ${response.statusText}`);
                }
    
                const json = await response.json();
                if(json.result !== 'success'){
                    throw new Error(`${json.result} ${json.message}`);
                }

                const itemIndex = items.findIndex((item) => item.no === itemNo);

                const newItems = update(items, {
                    $splice: [[itemIndex, 1]]
                }); 

                setItems(newItems);

            } catch(err){
                console.error(err);
            }
        }
    }

    return (
        <div 
            ref = { outterRef }
            className={"App"}
            onScroll={ e => {
                if (outterRef.current.scrollTop + outterRef.current.clientHeight >= innerRef.current.clientHeight) {
                    fetchMessage();
                }
            }}>
            <div ref = { innerRef }>
                <Guestbook items={ items } notifyItem={ notifyItem }/>
            </div>
        </div>
    );
}