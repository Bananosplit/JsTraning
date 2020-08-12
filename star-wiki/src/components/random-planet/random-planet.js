import React from 'react'
import './random-planet.css'

export default function RandomPlanet() {

    return (
        <div className="random-planet">
            <div className="planet-logo">
                <img src="https://starwars-visualguide.com/assets/img/planets/5.jpg" />
            </div>
            <div className='random-planet-wrap'>
                <div className="name-planet"> <h3>Name planet</h3></div>
                <div className="list">

                    <ul>
                        <li className='my-list'>
                            <span>Population</span>
                            <span>3000000</span>
                        </li>

                        <li className='my-list'>
                            <span>Rotation Period</span>
                            <span>43</span>
                        </li>

                        <li className='my-list'>
                            <span>Diameter</span>
                            <span>100</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}