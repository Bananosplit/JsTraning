import React, { Component } from 'react'

import Header from '../header'
import RandomPlanet from '../random-planet'


import './app.css'
import ErrorBtn from '../errorbtn'
import PeoplePage from '../peoplePage'

export default class App extends Component {


    render(){

        return (
            <div className = "app-wrap">
            <div className = "app">
                <Header/>
                <RandomPlanet/>
                <ErrorBtn/>
                <PeoplePage/>
                <PeoplePage/>
                <PeoplePage/>
            </div>
            </div>
        )
    }
}