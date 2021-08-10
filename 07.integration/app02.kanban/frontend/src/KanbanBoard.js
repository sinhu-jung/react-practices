import React, { useState, useEffect } from 'react';
import CardList from './CardList';
import styles from './assets/css/KanbanBoard.css';

export default function KanbanBoard() {
    const [cards, setCards] = useState([]);

    useEffect(async () => {
        try {
            const response = await fetch('/api/cards', {
                method:'get',
                headers:{'Content-Type': 'application/json'}
            });

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();
            if(json.result !== 'success'){
                throw new Error(`${json.result} ${json.message}`);
            }

            setCards(json.data);    
        } catch(err){
            console.error(err);
        }
    }, []);

    //component task
    const notifyTask = {
        add: async function(cardNo, taskName){ 
            try {
                const url = `/api/card/${cardNo}/task`;
                const tesk = {
                    no: null,
                    name: taskName,
                    done: false
                }

                const response = await fetch(url, {
                    method:'post',
                    headers:{'Content-Type': 'application/json'},
                    body: JSON.stringify(tesk)
                });
    
                if(!response.ok) {
                    throw new Error(`${response.status} ${response.statusText}`);
                }
    
                const json = await response.json();
                if(json.result !== 'success'){
                    throw new Error(`${json.result} ${json.message}`);
                }

                console.log(json);
            } catch(err){
                console.error(err);
            }
        }
    }

    return (
        <div className={styles.KanbanBoard}>
            <CardList key="ToDo" title={'ToDo'} cards={cards.filter(card => card.status=='ToDo')} notifyTask={ notifyTask }/>
            <CardList key="Doing" title={'Doing'} cards={cards.filter(card => card.status=='Doing')} notifyTask={ notifyTask }/>
            <CardList key="Done" title={'Done'} cards={cards.filter(card => card.status=='Done')} notifyTask={ notifyTask }/>
        </div>
    );
}