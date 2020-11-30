import React from 'react'
import People from './People'

function Person(props){
    const {name, city, country, employer, title, favouriteMovies} = props.person
    return(
        <div className = 'person' key = {id}>
            <h1> ${name.first} ${name.last}</h1>
            <h2> From: ${city}, ${country}</h2>
            <h2> Job Title: {title}</h2>
            <h2> Employer: {employer}</h2>

            <ol>Favorite Movies:
                <li>{favoriteMovies[0]}</li>
                <li>{favouriteMovies[1]}</li>
                <li>{favouriteMovies[2]}</li>
            </ol>

        </div>
    )
}

export default Person
// id: 19,
// name: { first: "Dari", last: "Lomasny" },
// city: "Aghavnadzor",
// country: "Armenia",
// employer: "Lazzy",
// title: "Sales Associate",
// favoriteMovies: [
//   "Not Another Happy Ending",
//   "Slipstream",
//   "Shaggy D.A., The"
// ] 

/*Name 
From: City, Country
Job Title: 
Employer:

Favourite Movies:
    1.
    2.
    3



/