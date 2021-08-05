import React from 'react';
import PropType from "prop-types"

export default function SearchBar( { callback, keyword } ) {
    return(
        <div className={'Searchbar'}>
            찾기: <input type='text' placeholder='search' value={ keyword } onChange={ (e) => { callback(e.target.value) }}/>
        </div>
    );
}

SearchBar.propType = {
    callback: PropType.func.isRequired,
    keyword: PropType.string.isRequired
}