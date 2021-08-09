import React, {useState} from 'react';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';
import data from './assets/json/data.json'

export default function EmaillistApp() {
    const [emails] = useState(data);
    const [keyword, setKeyword] = useState('');

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