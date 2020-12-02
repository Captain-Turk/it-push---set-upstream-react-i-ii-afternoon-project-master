import React, {Component}from 'react'

class Edit extends Component{
    construrctor(){
        super()

        this.state = {
            name.first: '',
            name.last: '',
            city: '',
            country: '',
            title:'',
            employer: '',
            favoriteMovies: '',
        }

    }

    onClick(e){
        this.setState({
            value: e.target.value
        })
    }



    render(){
        return(
            <div className = 'person' key = {id}>
            <input className = 'nameInput'> `${name.first} ${name.last}`</h1>
            <h2> From:` ${city}, ${country}`</h2>
            <h2> Job Title:` ${title}`</h2>
            <h2> Employer:` ${employer}`</h2>

            {favoriteMovies.map(movie => (
            <ol>Favorite Movies:
                <li key={movie.index}> {movie} </li>
            </ol>
            ))
            }
        </div>
        )
    }



}