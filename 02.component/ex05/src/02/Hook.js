import React, { Fragment, useRef, useState, useEffect } from 'react';

export default function Hook({ color }) {
    const [boxColor, setBoxColor] = useState( null );
    const [title, setTitle] = useState( " " );

    /**
     * 1. Alternative 1: getDerivedStateFromProps
     */
    if(boxColor !== color){
        setBoxColor(color);
    }
    
    /**
     * 2. After Rendering 함수 ( 상태에 변화 -> 렌더링 -> 함수)
     *    class component lifecycle(componentDidMount, componentDidUpdate)
     */

    useEffect(() => {
        console.log('After Rendering');
    });

    /**
     * 3. 어떤 특정 상태(boxColor)의 변화에 반응하는 After Rendering 함수
     *    : 관심 분리
     */
     useEffect(() => {
        console.log('Update Color (DB) Using APIs ... ');
    }, [boxColor]);

    /**
     * 4. Alternative 2 : componentDidMount & componentWillUnmount
     */
     useEffect(() => {
        console.log('After Mount(componentDidMount)');
        return (function(){
            console.log('After UnMount(componentWillUnmount)');
        });
    }, []);

    return (
        <Fragment>
            <h3
                style={ {
                    width: 300,
                    height: 50,
                    backgroundColor: boxColor
                } }    
            />
            <input 
                type='text' 
                value={ title } 
                onChange={ (e) => setTitle(e.target.value) }/>
        </Fragment>
    );
}