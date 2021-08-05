import React, { Fragment, useState } from 'react';
import LifeCycle from './LifeCycle';

export default function App() {
    const [color, setColor] = useState('#000');
    return (
        <Fragment>
            <h2>ex05: Component LifeCycle</h2>
            <button onClick={ () => { setColor(`#${Math.floor(Math.random() * 16777215 ).toString(16)}`) } }>색상변경</button>
            <br/>
            <button>색상</button>
            <LifeCycle color={ color }/>
        </Fragment>
    );
}