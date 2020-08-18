import React, { Component } from 'react'
import SwapiServise from '../../servises/swapi-servises'

import './random-planet.css'

export default class RandomPlanet extends Component {
    
     swapiService = new SwapiServise()

    state = {
        name: null,
        population: null,
        rotationPeriod: null,
        diametr: null,
        id:null
    }

    constructor(){
        super()
        this.updatePlanet()
    }

    updatePlanet() {
        const id = Math.floor(Math.random() * 25)
        this.swapiService
            .getPlanet(id)
            .then((planet) => {
                this.setState({
                    id: id,
                    name: planet.name,
                    population: planet.population,
                    rotationPeriod: planet.rotation_period,
                    diametr: planet.diameter
            
                })
            })
         
          
    }



    render() {

        const {id,name ,population, rotationPeriod, diametr} = this.state

        return(
        <div className="random-planet">

            <div className="planet-logo">
                <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
            </div>

            <div className='random-planet-details'>
                <div className="name-planet"> <h3> {name} </h3></div>
                <div className="feature-list">
                    <ul>
                        <li className='feature-list-item'>
                            <span> Population </span>
                            <span> {population} </span>
                        </li>

                        <li className='feature-list-item'>
                            <span> RotationPeriod </span>
                            <span> {rotationPeriod} </span>
                        </li>

                        <li className='feature-list-item'>
                            <span> Diametr </span>
                            <span> {diametr} </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        )

    }
}