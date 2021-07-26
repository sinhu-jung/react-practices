import React from 'react';
import styles from './App.css';

export default function() {
    /*
       리액트 컴포넌트 단일 루트 노드만 렌더링 할 수 있다.
       오류 
       <h2>App01</h2>
       <p>JSX Tutorials - 특징 02: Single Root Node</p>
     */
    return (
        <div id='App'>
            <h2>App01</h2>
            <p>JSX Tutorials - 특징 02: Single Root Node</p>
            <img width='100px' src='https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png' className={styles['App-logo']}/>
        </div>
    );
}