import React, {Component} from 'react'
import data from '../data'

class People extends Component{
    constructor(){
        super()

        this.state = {
            people: data

        }
    }

    render(){
        const mappedPeople = this.state.people.map(element => {return(
            <Person person = {element}
                    key = {element.id} />
        )})
            
        return(
            <Person />
            
        )
    }


}

export default People