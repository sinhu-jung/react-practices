import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import './assets/Form.css';

export default function Form() {
    return (
        <form id="loginForm" name="loginForm" method="post" action="/do/not/post" 
            onSubmit={ (e) => { 
                e.preventDefault(); 
                console.log(e.target.email.value, ":", e.target.password.value); 
                } }>
            <label htmlFor="email">이메일</label>
            <input id="email" name="email" type="text" />
            
            <label htmlFor="password">패스워드</label>
            <input id="password" name="password" type="password"/>

            <input type="submit" value="로그인" />
        </form>
    );
}