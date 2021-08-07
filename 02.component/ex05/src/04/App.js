import React, { useState, useCallback } from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {
    const [showClock, setShowClock] = useState(true);

    const hideClock = useCallback(() => { setShowClock(!showClock)})

    return (
        <div className='clock-display'>
            <h2>ex05 - Component LifeCycle Practice</h2>
            {
                showClock ?
                    <Clock callback={ () => { setShowClock(!showClock)} } /> : null
            }
        </div>
    );
}