import React, {useRef} from 'react';
import Guestbook from './Guestbook';
import './assets/scss/App.scss';

export default function App() {
    const outterRef = useRef(null);
    const innerRef = useRef(null);

    let isFetching = false;

    const onScroll = (e) => {
		if(isFetching){
            isFetching = !isFetching;
			return;
		}

        if(outterRef.current.scrollTop + outterRef.current.clientHeight >= innerRef.current.clientHeight) {
            console.log("fetch");
            isFetching = !isFetching;
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