import React,{Component} from 'react'


class Person extends Component{
    constructor(){
        super()
        this.state ={
            person:{
                id: number,
                name: { 
                    first: '', 
                    last: '' },
                city: '',
                country: '',
                employer: '',
                title: '',
                favoriteMovies:['','','']
            }
        }  
   
    }

    render(){
        const {id, name, city, country, title, employer, favoriteMovies} =this.state.person
        return(
            <div className = 'person' key = {id}>
                <h1> `${name.first} ${name.last}`</h1>
                <h2> From:` ${city}, ${country}`</h2>
                <h2> Job Title:` ${title}`</h2>
                <h2> Employer:` ${employer}`</h2>
    
                {favoriteMovies.map((movie, index )=> (
                <ol>Favorite Movies:
                    <li key={index}> {movie} </li>
                </ol>
                ))
                }
            </div>
        

        )
    }

}    
        
export default Person
                 
            



            

        
