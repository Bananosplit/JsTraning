import React,{Component} from 'react'
import ListItem from '../list-item'
import PersonDetails from '../person-details'
import './style.css'

export default class PeoplePage extends Component{
   
    state = {
        selectedPerson: 5,
        hasError: false
    }

    componentDidCatch() {
        this.setState({hasError: true})
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson:id
        })
    }

    render() {

        return(
            <div className = "star-list-wrap">
                <ListItem onItemSelected = {this.onPersonSelected}/>
                <PersonDetails personId  = {this.state.selectedPerson}/>
            </div>
        )
    }
}

