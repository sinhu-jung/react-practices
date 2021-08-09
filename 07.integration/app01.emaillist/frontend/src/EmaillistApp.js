import React, {useEffect, useState} from 'react';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';

export default function EmaillistApp() {
    const [emails, setEmails] = useState([]);
    const [keyword, setKeyword] = useState('');

    useEffect( async () => {
        try {
            const data = await fetch('/api', {
                method: 'get',
                mode: 'same-origin',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: null
            });

            if(!data.ok){
                throw new Error( `${data.status} ${data.statusText}`)
            }

            const json = await data.json();
            setEmails(json.data);

        } catch (error){
            console.error(error);
        }
    }, []);

    const notifyKeywordChanged = (keyword) => {
        setKeyword(keyword)
    }

    return (
        <div className={'EmaillistApp'}>
            <SearchBar callback={ notifyKeywordChanged } keyword={ keyword } />
            <Emaillist keyword={ keyword } emails={ emails }/>
        </div>
    );
}