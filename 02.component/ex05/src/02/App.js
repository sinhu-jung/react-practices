import React, { Fragment, useState } from 'react';
import Hook from './Hook';

export default function App() {
    const [color, setColor] = useState('#000');
    
    return (
        <Fragment>
            <h2>ex05: Hook of Functional Component</h2>
            <button
                onClick={ () => setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`) }>색상변경</button>
            <br/>
            <Hook color={color}/>
        </Fragment>
    );
}