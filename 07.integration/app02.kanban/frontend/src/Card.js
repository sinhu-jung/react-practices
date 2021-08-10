import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TaskList from './TaskList';
import styles from './assets/scss/Card.scss';

export default function Card({ cardNo, title, description, status ,tasks, notifyTask }) {
    const [ showDetails, setShowDetails ] = useState(true);

    const styleSideColor = {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        width: 3,
        backgroundColor: status == 'ToDo' ? '#3e7e28' : status == 'Doing' ? '#bd8031' : '#222'
    }
    return(
        <div className={ styles.Card }>
            <div style={ styleSideColor }/>
            <div 
                className={showDetails ? [styles.Card__Title, styles['Card__Title-open']].join(' ') : styles.Card__Title }
                onClick={() => setShowDetails(!showDetails) }>
                    { title }
            </div>
            {   
                showDetails ?
                <div className={styles.Card__Details}>
                    { description }
                    <TaskList cardNo={ cardNo } tasks={ tasks } notifyTask={ notifyTask } />
                </div> : null
            }
        </div>
    );
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    tasks: PropTypes.arrayOf(PropTypes.object).isRequired
}