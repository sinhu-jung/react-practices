import React from 'react';
import CardList from './CardList'
import cards from '../assets/json/data.json'

export default function KanbanBoard() {
    return (
        <div className={'KanbanBoard'}>
            <CardList key='ToDo' title={'To Do'} cards={cards.filter(card => card.status == 'ToDo')} />
            <CardList key='Doing' title={'Doing'} cards={cards.filter(card => card.status == 'Doing')}/>
            <CardList key='Done' title={'Done'} cards={cards.filter(card => card.status == 'Done')} />
        </div>
    );
}