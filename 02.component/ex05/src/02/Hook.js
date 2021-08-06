import React, { Fragment, useRef, useState, useEffect } from 'react';

export default function Hook({ color }) {
    const [boxColor, setBoxColor] = useState( color );
    const h3Ref = useRef(null);

    console.log('-------->', boxColor, ':', color);

    return (
        <h3
            style={ {
                width: 300,
                height: 50,
                backgroundColor: boxColor
            } }
            ref={ h3Ref }    
        />
    );
}