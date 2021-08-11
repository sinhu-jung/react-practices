import React from 'react';
import AddForm from './AddForm';
import GuestbookList from './GuestbookList';
import styles from './assets/scss/Guestbook.scss';

export default function Guestbook( { items, notifyItem }) {
    return (
        <div className={styles.Guestbook}>
            <h1>방명록</h1>
            <AddForm notifyItem={ notifyItem }/>
            <GuestbookList messages={ items } notifyItem={ notifyItem }/>
        </div>
    );
}