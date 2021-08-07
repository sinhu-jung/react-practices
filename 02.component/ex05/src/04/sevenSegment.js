import React from 'react';
import './assets/scss/SevenSegment.scss'

export default function sevenSegment({ clock }) {
    return (
        <div className="numbers">
            <p>{clock}</p>
            <p className="placeholder"></p>
        </div>
    );
}