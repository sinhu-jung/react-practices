import React from 'react';

export default function () {
    return (
        /* jsx 에서는 {} 안에 함수가 들어가야됨 코드가 들어가면 안됨 */
        <h1 onClick={ (e) => { 
            console.log('click!!!') 
            } }
            style={ {
                cursor: 'pointer'
            } }>
            ex03 - Inline Handler
        </h1>
    );
}