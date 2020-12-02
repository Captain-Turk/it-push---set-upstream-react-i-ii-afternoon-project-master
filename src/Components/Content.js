import React from "react";

function Content(props) {
  let { peopleList, currentIndex } = props;
  let person = props.peopleList[props.currentIndex];


  //!!!Altenative to inline mapping: 
// If you use this one just activate {movieList} between <ol/> tags in retutur

  // const movieList = person.favoriteMovies.map((movie, movieIndex) => {
  //   return <li key={movieIndex}> {movie} </li>;
  // });

  return (
    <div className="person" key={person.id}>
      {console.log(props)}
      <div id="pageBox">
        <p id="page">
          {currentIndex + 1}/{peopleList.length}
        </p>
      </div>

      <h1 id="name">
        {person.name.first} {person.name.last}
      </h1>
      <h2>
        From:{person.city} {person.country}
      </h2>
      <h2 className="JobInfo"> Job Title: {person.title} </h2>
      <h2 className="JobInfo"> Employer: {person.employer} </h2>
      <ol id="MovieList">
        <h2>Favorite Movies:</h2>
        {person.favoriteMovies.map((movie, movieIndex) => {
          return <li key={movieIndex}> {movie} </li>;
        })}
        {/* {movieList} */}
      </ol>
    </div>
  );
}

export default Content;

// {person.favoriteMovies.map((movie, movieIndex) => {
//   return <li key={movieIndex}> {movie} </li>;
// })}

// const person = peopleList.map((person, personIndex)=> {
//     return  (
//      <div className = 'person' key = {person.id}>

//      <span className = 'page'>`{personIndex+1}/{peopleList.length}`</span>

//      <h1> `${person.name.first} ${person.name.last}`</h1>
//      <h2> From:` ${person.city}, ${person.country}`</h2>
//      <h2> Job Title:` ${person.title}`</h2>
//      <h2> Employer:` ${person.employer}`</h2>

//      </div>
//     )

// )}

// const movieList = peopleList.fovouriteMovies.map((movie, movieIndex)=> {
//     return <ol>Favorite Movies:
//              <li key={movieIndex}> {movie} </li>
//            </ol>
// }

// return(
//     <div>
//         <Person />
//         <MovieList />
//     </div>

// )
