import React, {Component} from 'react'
import data from './data'
import Person from './Person'


class People extends Component{
    constructor(){
        super()

        this.state = {
            peopleList:[]

        }
        this.state.peopleList = this.state.peopleList.bind(this)
    }

    componentDidMount(){
        this.setState({
            peopleList: data
            
        })
    }

    


    render(){
        const {peopleList} =this.state        
        
        const mappedPeopleList = peopleList.map( (element,index) => {
            return  <Person person = {element}
                    key = {element.id} 
                    index = {index}/>
        })

       
        return(
             <Person />        
        )
    }


}

export default People


