import React from 'react';

export default function() {
    const date = new Date();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return (
        <div>
            {('0' + (hour > 12 ? hour -12 : hour)).slice(-2)}
            {' : '}
            {('0' + minutes).slice(-2)} 
            {' : '}
            {('0' + seconds).slice(-2)} 
            {' : '}
            {hour > 12 ? 'PM' : 'AM'}
        </div>
    );

    /**
     * createElement(
     * 'div',
     * null,
     * '09',
     * ':',
     * '19',
     * ':'
     * '30'
     * )
     * 파싱단위로 하기 때문에 공백 무시 됨
     * 따라서 {' : '} 나 &nbsp 같은걸로 띄워 줘야함

     */
}