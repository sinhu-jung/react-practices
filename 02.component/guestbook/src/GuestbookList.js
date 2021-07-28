import React from 'react';
import List from './data.json';
import Item from './Item.js';

export default function GuestbookList() {
    return (
        <ul className="Guestbook__List">
            { List.map(list => <Item 
                                    key={ list.no } 
                                    name={ list.name }
                                    message= {list.message}
                                    regDate={ list.regDate }/>)}
        </ul>
    );
}