import React, {Fragment} from 'react';
import './Cards.scss';


import { Card } from '../Card/Card';


const Cards = ({data, openForm, onCardDelete}) => {

const renderCards = () => (
    <ul className="second-list">
        <li className="cardAdd" onClick={openForm}>
            <span>+</span>
        </li>
    
    {data.map( card => <Card key={card.id} 
                            name={card.name} 
                            age={card.age} 
                            lastName={card.lastName}
                            onDelete={() => onCardDelete(card.id)}/>)}
    </ul>
    
    )


return (
            
    <Fragment>
        {renderCards()}
      
        </Fragment>
    
        ) 



};

export { Cards };