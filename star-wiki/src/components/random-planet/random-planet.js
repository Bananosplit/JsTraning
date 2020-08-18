import React, { Component } from 'react'
import './random-planet.css'

export default class RandomPlanet extends Component {

    state = {
        name: null,
        population: null,
        rotationPeriod: null,
        diametr: null
    }

    render() {

        const {name ,population, rotationPeriod, diametr} = this.state

        return(
        <div className="random-planet">

            <div className="planet-logo">
                <img src="https://starwars-visualguide.com/assets/img/planets/5.jpg" />
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