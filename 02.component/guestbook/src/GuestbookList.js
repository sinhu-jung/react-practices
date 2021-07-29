import React from 'react';
import Item from './Item.js';

export default function GuestbookList( {messages} ) {
    return (
        <ul className="Guestbook__List">
            { messages.map(message => <Item 
                                    key={ message.no } 
                                    name={ message.name }
                                    message= {message.message}/>)}
        </ul>
    );
}