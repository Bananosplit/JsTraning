import React, { Component } from 'react'

import Header from '../header'
import RandomPlanet from '../random-planet'
import PersonDetails from '../person-details'
import ListItem from '../list-item'

import './app.css'

export default class App extends Component {

    render(){

        return (
            <div className = "app-wrap">
            <div className = "app">
                <Header/>
                <RandomPlanet/>
                <div className = "star-list-wrap">
                    <ListItem/>
                    <PersonDetails/>
                </div>
            </div>
            </div>
        )
    }
}