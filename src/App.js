import React, {Component, Fragment} from 'react';
import './App.scss';

import { Header } from './components/Header/Header';
import { Cards } from './components/Cards/Cards';
import { Popup } from './components/Popup/Popup';
import { Form } from './components/Form/Form';
import { Comunnicator } from './Comunnicator'

class App extends Component {

        state = {
         
            data : [],

            filteredData: [],
            popupOpened: false
        }

        componentDidMount(){

        Comunnicator.Fetch()
            .then(responseData =>  {
                this.setState({
                    filteredData: this.formaData(responseData)
                })

            })

            
        }

        // componentDidUpdate(prevProps, prevState) {

           
        // }

        formaData(responseData) {

            const data = [];

            for(const item in responseData){
                data.push({
                    ...responseData[item],
                    id: item
                })
            }
          
                return data
        }

        filterData (searchResults) {
            this.setState({
                filteredData: searchResults
        })
    }

        onPopupOpen () {
            this.setState({
                popupOpened: true
        })
    }

        onPopupClose () {
            this.setState({
                popupOpened: false
        })
    }

        onCardAdd (data) {
            Comunnicator.Post(data)
            .then(() => {
                Comunnicator.Fetch()
                .then(responseData => {
                    this.setState({
                        popupOpened: false,
                        filteredData: this.formaData(responseData)
                    })

                })
              
            })
    }

    onCardDelete(cardId) {
        Comunnicator.Delete(cardId)
        .then(() => {
            Comunnicator.Fetch()
            .then(responseData => {
                this.setState({
                   filteredData: this.formaData(responseData)
                })

            })
          
        })
    }
    
    render() {

        const { data, filteredData, popupOpened } = this.state;
        
        return (
            <Fragment>
               <Header black 
                        search 
                        data={data}
                        onDataFilter={(searchResults=> this.filterData(searchResults))} />

                <Cards data={filteredData}
                       openForm={() => this.onPopupOpen ()} 
                       onCardDelete={cardId => this.onCardDelete(cardId)}/>

        {popupOpened && (<Popup popupClose={() => this.onPopupClose()} 
                                title={"Add Person"}>
                        <Form onFormSubmit={(data) => this.onCardAdd(data)}/>
                        </Popup>)}
            </Fragment>
        )
    }

}

export default App;



