import React, { Component } from 'react'
import SwapiServise from '../../servises/swapi-servises'
import Spiner from '../spiner'
import './list-item.css'


export default class ListItem extends Component{

    swapi = new SwapiServise()

    state = {
        peopleList: null
    }

    componentDidMount() {
        
        this.swapi
            .getAllPeople()
            .then((peopleList)=> {
                this.setState({
                    peopleList
                })
            })
    }

    renderItems = (arr) => {
        return arr.map(({name,id}) => {

            return(

        <li className = "star-item"
            key = {id}
            onClick = {() => this.props.onItemSelected(id)}>
                  {name}
        </li>
            )
        })
    }
    
    render() {
        const {peopleList} = this.state
         if (!peopleList) {return <Spiner/>}

        const items = this.renderItems(peopleList)

        return (
            <ul className = "star-ul">
                {items}
            </ul>
        )
    }
    
}