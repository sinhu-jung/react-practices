import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import styles from './assets/css/TaskList.css';

export default function TaskList({ cardNo, tasks, notifyTask }) {
    return(
        <div className={styles.TaskList}>
            <ul>
                { tasks.map(task => <Task key={task.no} no={task.no} name={task.name} notifyTask={ notifyTask } cardNo={ cardNo } /> )}
            </ul>
            <input 
                className={styles.TaskList_input_add_task} 
                type='text' 
                placeholder={ '테스트 추가' } 
                onKeyPress={ (e) => {
                    if( e.key == 'Enter'){
                        notifyTask.add(cardNo, e.target.value);
                        e.target.value = '';
                    }
                } }/>
        </div>
    );
}

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object).isRequired
}