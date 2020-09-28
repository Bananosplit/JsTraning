import React, { Component }  from 'react'
import SwapiServise from '../../servises/swapi-servises'
import Spiner from '../spiner'
import './person-details.css'


export default class PersonDetails extends Component {

  swapiService = new SwapiServise()

  state = {
      person: null
  
    }
  componentDidMount(){
    this.updatePersone()
  }

  componentDidUpdate(prevProps){
    if(this.props.personId !== prevProps.personId){
      this.updatePersone()
    }
  }
  updatePersone() {
    const {personId} = this.props
    if(!personId){
      return ;
    }
    this.swapiService
      .getPersone(personId)
      .then(person => {
        this.setState({ person })
      })
  }
        <img className="person-image"
          src="https://starwars-visualguide.com/assets/img/characters/3.jpg" />

        <div className="card-body">
          <h4>R2-D2</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>male</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>43</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>red</span>
            </li>
          </ul>
        </div>
      </div>
    )
}