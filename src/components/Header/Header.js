import React from 'react';
import './Header.scss';
import logo from '../../img/logo.png';

import { Search } from '../Search/Search';



const Header = ({black, search, data, onDataFilter}) => {

    const renderSearch = () => {
        if(search) {
            return <Search data={data} onDataFilter={onDataFilter} />
        } return null
    }

    const getClass = () => {
        if(black){
            return 'header black'
        }
    }
    
    return (
        
            <header className={getClass()}> 
                <img className="logo" src={logo} />
                
                {renderSearch()}
                
            </header>
    )
}

export {Header};