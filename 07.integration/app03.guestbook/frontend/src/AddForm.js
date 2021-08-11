import React from 'react'; 
import styles from './assets/scss/AddForm.scss';

export default function AddForm({notifyItem}){

    const submitHandler = (e) => {
        e.preventDefault();
        notifyItem.add( e.target.name.value , e.target.password.value, e.target.message.value );
        e.target.name.value = '';
        e.target.password.value = '';
        e.target.message.value = '';
    }

    return(
        <form className={styles.Guestbook__Form} action="" method="post" onSubmit={ submitHandler }>
            <input type="text" id="name" placeholder="이름" />
            <input type="password" id="password" placeholder="비밀번호" />
            <textarea id="message" placeholder="내용을 입력해 주세요."></textarea>
            <input type="submit" value="보내기"/>
        </form>
    );
}