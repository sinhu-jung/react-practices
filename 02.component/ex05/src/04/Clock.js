import React, { useState, useEffect } from 'react';
import SevenSegment from './sevenSegment';
import SetAmPm from './setAmPm';
import Colon from './Colon';
import './assets/scss/Clock.scss';

export default function Clock(props) {
    const [state, setState] = useState({
        count: 0,
        hours: '00',
        minutes: '00',
        seconds: '00'
    });

    useEffect(() => {
        const interval = setInterval(
            function () {
                setState({count: ++state.count});
                if(state.count == 5){
                    props.showClock();
                }
                const date = new Date();
                const hours = date.getHours();
                const minutes = ('0' + date.getMinutes()).slice(-2);
                const seconds = ('0' + date.getSeconds()).slice(-2);
    
                setState({
                    hours: ('0' + (hours == 0 ? 12 : (hours > 12 ? hours - 12 : hours))).slice(-2),
                    minutes: minutes,
                    seconds: seconds,
                })

                hours < 12 ? props.callback(1) : hours >= 12 && hours < 18 ? props.callback(2) : props.callback(3);
            }, 1000);

        return (function () {
            console.log('clock', 'componentWillUnmount() called')
            clearInterval(interval);
        });
    }, []);

    return (
        <div className="clock">
            <SevenSegment clock={ state.hours } />
            <Colon />
            <SevenSegment clock={ state.minutes } />
            <Colon />
            <SevenSegment clock={ state.seconds } />
            <SetAmPm session = { state.hours >= 12 ? 'pm' : 'am' } />
        </div>
    );
}