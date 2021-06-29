import { useEffect, useState } from 'react';
import './App.css';
const axios = require('axios').default;

const App = () => {

  const url = "https://www.omdbapi.com/?apikey=45f0782a&s=war"
  const [movies, updateMovies] = useState([])
  const [selectedMovie, updateSelectedMovie] = useState({})

  useEffect(() => {
    axios.get(url)
      .then((response) => {
        console.log(response.data["Search"])
        updateMovies(response.data["Search"])
      })
  }, [])

  return (
    <div>
      <div className="row p-4 align-items-start">
        {
          movies && movies.length > 0 && movies.map((eachMovie) => {
            return (
              <div className="col movie-list" onMouseOver={() => {updateSelectedMovie(eachMovie)}}>
                <img className={selectedMovie && selectedMovie.imdbID === eachMovie.imdbID ? "movie-hovered" : "" } src={eachMovie.Poster} />
                {selectedMovie && selectedMovie.imdbID === eachMovie.imdbID ? <div className="movie-title"> {eachMovie.Title} </div> : null }
              </div>
              
            )
          })
        }
      </div>
    </div>
  )
}

export default App;
