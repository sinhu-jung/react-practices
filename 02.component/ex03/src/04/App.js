import React, {Fragment} from 'react';
import logo from '../assets/images/react-logo.png';

export default function App() {
    const onKeyPressInput = (e) => { 
        if(e.key = 'Enter') {
            console.log(e.target.value);
            e.target.value = '';
        } 
    };
    const onFocusInput = (e) => { console.log('onFocusInput'); };
    const onBlurInput = (e) => { console.log('onBlurInput'); };
    const onMouseOverImage = (e) => {console.log('onMouseOverImage'); };
    const onMouseMoveImage = (e) => { console.log('onMouseMoveImage'); };
    const onMouseOutImage = (e) => { console.log('onMouseOutImage'); };
    const onMouseDownImage = (e) => { console.log('onMouseDownImage'); };
    const onMouseUpImage = (e) => { console.log('onMouseUpImage'); };
    const onClickImage = (e) => { console.log('onClickImage'); };
    const onDoubleClickImage = (e) => { console.log('onDoubleClickImage'); };

    return (
        <Fragment>
            <h2>ex03 - Some Examples of Event Handler</h2>
            <input
                type='text'
                placeholder='메세지를 입력 하세요'
                onKeyPress={ onKeyPressInput }
                onFocus={ onFocusInput }
                onBlur={ onBlurInput } />
                <br/>
                <br/>
            <img
                style={ {
                    cursor: 'pointer',
                    width: 190,
                    border: '1px solid #ccc'
                } }
                src={ logo }
                onMouseOver={ onMouseOverImage }
                onMouseMove={ onMouseMoveImage }
                onMouseOut={ onMouseOutImage }
                onMouseDown={ onMouseDownImage }
                onMouseUp={ onMouseUpImage }
                onClick={ onClickImage }
                onDoubleClick={ onDoubleClickImage }/>
        </Fragment>
    );
}