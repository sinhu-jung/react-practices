import React from 'react';
import PropTypes from 'prop-types';
import styles from './assets/css/Task.css';

export default function Task( {no ,name, notifyTask, cardNo} ) {
    return (
        <li className={styles.TaskList__Task}>
            <input type='checkbox' defaultChecked={ true } />
            {name}
            <a 
                href='#' 
                className={styles['TaskList__Task--remove']}
                onClick={ (e) => {
                    notifyTask.del(no, cardNo, e.target.name );
                }}
            ></a>
        </li>
    );
}

Task.propTypes = {
    name: PropTypes.string.isRequired
}