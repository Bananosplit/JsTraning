import React, { Component } from 'react'
import SwapiServise from '../../servises/swapi-servises'

import Spiner from '../spiner'

import './random-planet.css'

export default class RandomPlanet extends Component {
    
     swapiService = new SwapiServise()

    state = {
     planet: {},
     loading: true
    }

    constructor(){
        super()
        this.updatePlanet()
      
    }

    componentDidMount() {
        this.updatePlanet()
        this.interval = setInterval(this.updatePlanet, 20000)
        //clearInterval(this.interval)
    }

    onPlanetLoadet = (planet) => {
        this.setState({ planet, loading: false })
        
    }

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 25) + 1
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoadet)
         
          
    }



    render() {

        const {planet, loading} = this.state

        let nameWrap = 'random-planet'

        const spiner = loading ? <Spiner/> : null
        const content = !loading ? <PlanetView planet = {planet} />: null
        if (spiner) nameWrap+= ' spiner'

        return (

        <div className = {nameWrap} >
            {spiner}
            {content}
        </div>
        )

    }
}


const PlanetView = ({planet}) => {
    const { id,name ,population, rotationPeriod, diametr} = planet

    return (
        <React.Fragment>
            <div className="planet-logo">
                <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
            </div>
            <div className='random-planet-details'>
                <div className="name-planet"> <h3> {name} </h3></div>
                <div className="feature-list">
                    <ul>
                        <li className='feature-list-item'>
                            <span> Population:  </span>
                            <span> {population} </span>
                        </li>

                        <li className='feature-list-item'>
                            <span> RotationPeriod:  </span>
                            <span> {rotationPeriod} </span>
                        </li>

                        <li className='feature-list-item'>
                            <span> Diametr:  </span>
                            <span> {diametr} </span>
                        </li>
                    </ul>
                </div>
            </div> 

        </React.Fragment>
    )
}