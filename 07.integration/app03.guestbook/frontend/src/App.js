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

    const onScroll = async (e) => {

		if(isFetching){
            isFetching = !isFetching;
			return;
		}

        if(outterRef.current.scrollTop + outterRef.current.clientHeight  >=  innerRef.current.clientHeight - 1) {
            const response = await fetch(`/api/read/${no}`, {
                method:'get',
                headers:{'Content-Type': 'application/json'}
            });

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();
            if(json.result !== 'success'){
                throw new Error(`${json.result} ${json.message}`);
            }


            const newItems = items.concat(json.data);

            setItems(newItems);
            setNo(items[items.length-1].no);
            isFetching = !isFetching;
        }
        
    };

    useEffect( async () => {
        try{
            const response = await fetch('/api/read', {
                method:'get',
                headers:{'Content-Type': 'application/json'}
            });

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();
            if(json.result !== 'success'){
                throw new Error(`${json.result} ${json.message}`);
            }

            setItems(json.data);
            setNo(json.data[json.data.length - 1].no);

        } catch(err) {
            console.error(err);
        }
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
            onScroll={ onScroll }>
            <div ref = { innerRef }>
                <Guestbook items={ items } notifyItem={ notifyItem }/>
            </div>
        </div>
    );
}