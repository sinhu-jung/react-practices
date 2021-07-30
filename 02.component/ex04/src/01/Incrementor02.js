import React, {useState} from 'react';

export default function({ begin, step }){
    const [ stateValue, setValue ] =  useState(begin);

    const onClickButtonplus = (e) => {
        setValue(stateValue + step);
    }

    const onClickButtonminus = (e) => {
        setValue(stateValue - step);
    }

    return (
        <div>
            <button onClick={ onClickButtonplus }>
                <strong> + </strong>
            </button>
            { ' ' }
            <span>{ stateValue }</span>
            { ' ' }
            <button onClick={ onClickButtonminus }>
                <strong> - </strong>
            </button>
        </div>
    );
}