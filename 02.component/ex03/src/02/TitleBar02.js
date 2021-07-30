import React, { useState } from 'react';

export default function TitelBar02() {
    const no = 10;
    const onClickHeader = (e) => { 
        console.log('TitelBar02 click!!!')
    }

    return (
        <h1 onClick={ onClickHeader }
            style={ {
                cursor: 'pointer'
            } }>
            ex03 - Functional Event Handler(Functional Component) {no}
        </h1>
    );
}