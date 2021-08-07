import React from 'react';
import './assets/scss/SetAmPm.scss';

export default function sevenSegment({ session }) {
    return (
        <div className="AmPm">
            <div>
                <p className={session === 'am' ? 'on' : 'off'}>am</p>
            </div>
            <div>
                <p className={session === 'pm' ? 'on' : 'off'}>pm</p>
            </div>
        </div>
    );
}