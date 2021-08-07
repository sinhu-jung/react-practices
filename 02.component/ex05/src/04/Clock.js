import React, { useState, useEffect } from 'react';
import SevenSegment from './sevenSegment';
import SetAmPm from './setAmPm';
import Colon from './Colon';
import './assets/scss/Clock.scss';

export default function Clock(props) {
    const [hours, setHours] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');
    const [session, setSession] = useState('am');
    let count = 0;

    useEffect(() => {
        const interval = setInterval(
            function () {
                if (++count == 5) {
                    props.callback();
                }

                const date = new Date();
                const hours = date.getHours();
                const minutes = date.getMinutes();
                const seconds = date.getSeconds();

                setHours(`0${hours === 0 ? 12 : hours > 12 ? hours - 12 : hours}`.slice(-2));
                setMinutes(`0${minutes}`.slice(-2));
                setSeconds(`0${seconds}`.slice(-2));
                setSession(hours >= 12 ? 'pm' : 'am');
            }, 1000);

        return (function () {
            console.log('clock', 'componentWillUnmount() called')
            clearInterval(interval);
        });
    }, []);

    return (
        <div className="clock">
            <SevenSegment clock={ hours } />
            <Colon />
            <SevenSegment clock={ minutes } />
            <Colon />
            <SevenSegment clock={ seconds } />
            <SetAmPm session = { session } />
        </div>
    );
}