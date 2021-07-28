import React from 'react';
import AddForm from './AddForm';
import GuestbookList from './GuestbookList';

export default function Guestbook() {
    return (
        <div className="Guestbook">
            <h1>방명록</h1>

            <AddForm />
            <GuestbookList />
        </div>
    );
}