import React, { useState, useCallback } from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {
    const [now, setNow] = useState('Good Morning');

    return (
        <div className='clock-display'>
            <h2>{ now }</h2>
            {
                <Clock callback={ (e) => { e == 1 ? now : e == 2 ? setNow('Good Afternoon') : setNow('Good Evening') } } />
            }
        </div>
    );
}