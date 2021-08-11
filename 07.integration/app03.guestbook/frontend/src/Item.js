import React, { Fragment, useState } from 'react';
import Modal from "react-modal";
import ReactModal from "react-modal";
import PropTypes from 'prop-types';
import styles from './assets/scss/Item.scss';
import modalstyles from './assets/scss/modal.scss';

ReactModal.setAppElement('body');

export default function Item({ no, name, message, notifyItem }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [text, setText] = useState('');

    const modalHandler = (e) => {
        notifyItem.del(no, text);
        setModalIsOpen(false);
    }

    return (
        <Fragment>
            <li className={styles.Guestbook__List__Item}>
                <strong>{name}</strong>
                <p>
                    {message && message.split('\n').map((line, index) => index > 0 ?
                        <Fragment key={index}>
                            <br />
                            {line}
                        </Fragment> : line)}
                </p>
                <strong></strong>
                <a href='' onClick={(e) => { 
                    e.preventDefault();
                    setModalIsOpen(true)}}>삭제</a>
                <br /><br />
            </li>


            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                shouldCloseOnOverlayClick={true}
                className={modalstyles.Modal}
                overlayClassName={modalstyles.Overlay}
                style={{ content: { width: 350 } }}>
                <h1>비밀번호입력</h1>
                <div>
                    <form>
                        <label>작성시 입력했던 비밀번호를 입력하세요.</label>
                        <br /><br />
                        <input name='password' type="text" value={ text } onChange={ (e) => setText(e.target.value) }/>
                    </form>
                </div>
                <div className={modalstyles['modal-dialog-buttons']}>
                    <button onClick={ modalHandler } >확인</button>
                    <button onClick={() => setModalIsOpen(false)}>취소</button>
                </div>
            </Modal>
        </Fragment>
    );
}

Item.propTypes = {
    name: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
}