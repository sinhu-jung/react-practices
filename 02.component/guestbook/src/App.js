import React, {useRef} from 'react';
import Guestbook from './Guestbook';
import './assets/scss/App.scss';

export default function App() {
    const outterRef = useRef(null);
    const innerRef = useRef(null);

    const onScroll = (e) => {
        if(outterRef.current.scrollTop + outterRef.current.clientHeight >= innerRef.current.clientHeight -1) {
            console.log("fetch");
        }
    };

    return (
        <div 
            ref = { (ref) => outterRef.current = ref }
            className={"App"}
            onScroll={ onScroll }>
            <div ref = { (ref) => innerRef.current = ref }>
                <Guestbook />
            </div>
        </div>
    );
}