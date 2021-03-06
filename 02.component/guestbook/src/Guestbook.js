import React from 'react';
import AddForm from './AddForm';
import GuestbookList from './GuestbookList';
import messages from './assets/json/data.json';
import styles from './assets/scss/Guestbook.scss';

export default function Guestbook() {
    return (
        <div className={styles.Guestbook}>
            <h1>방명록</h1>
            <AddForm />
            <GuestbookList messages={ messages }/>
        </div>
    );
}