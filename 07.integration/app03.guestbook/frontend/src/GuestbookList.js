import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item.js';
import styles from './assets/scss/GuestbookList.scss';

export default function GuestbookList( {messages, notifyItem} ) {

    return (
        <ul className={styles.Guestbook__List}>
            { messages.map(message => <Item 
                                    key={ message.no }
                                    itemNo = { message.no } 
                                    name={ message.name }
                                    message= {message.message}
                                    notifyItem={ notifyItem }/>)}
        </ul>
    );
}

GuestbookList.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.object).isRequired
}