import React from 'react';

export default function SearchBar(params) {
    return(
        <div className={'Searchbar'}>
            찾기: <input type='text' placeholder='search'/>
        </div>
    );
}