import React from 'react';
import ListItem from './ListItem';

export default function FoodList ( {foods}) {
    return (
        <ul>
            { foods.map((food)=> <ListItem key={food.no} name={food.name} quantity={food.quantity}/>) }
        </ul>
    );
    /**
     *  key는 내부에서 처리 해주는 특별한 속성이므로 ListItem에서 안 받아 줘도 된다.
     */
}
