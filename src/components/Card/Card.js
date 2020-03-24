import React from 'react';
import { Button } from '../Button/Button';


const Card = ({name, age, lastName, onDelete}) => {

    return (

        <li>
            <span>Name: {name}</span>
            <span>Last name: {lastName}</span>
            <span>Age: {age}</span>
            <Button type='error' click={() => onDelete()}>Delete</Button>
        </li>);

}


export { Card }