import React, { useEffect, useState } from 'react'
import axios from "axios"
//import MovieList from "components/MovieList/MovieList";
import { Link, useLocation, useSearchParams } from 'react-router-dom';

export default function About() {

  const location = useLocation();
  
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get("query") ?? "";
  
  axios.defaults.headers.common['Authorization'] =
'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNDU3YzgxMzRhZjE3MWM3YTk3NjA3Mjk2MWUyOWY1MSIsInN1YiI6IjY1NzNhZGNmZDQwMGYzMDBjOTIwOTJhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q1IdNqN9HcQoVWvkk0GsmzK0OberDk5bdp3RCC_tmBE';
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState(queryParam)

  function handleSearch(e) {
    e.preventDefault()
    axios.get(`https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`)
      .then(response => {
        const data = response.data.results
        setMovies(data)
      })
      .catch(e => { 
        console.log(e)
      })
    
  }

   useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`)
      .then(response => {
        const data = response.data.results
        setMovies(data)
      })
      .catch(e => { 
        console.log(e)
      })
     
  });

 
  const updateQueryString = (query) => {
    const nextParams = query !== "" ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <div>
    <form>
        <input type="text" onChange={(e) => {
          updateQueryString(e.target.value)
          }} name='input' />
        <button onClick={(e) => {
          handleSearch(e)
          setSearch(e.target.form.input.value)
          e.target.form.reset()
        }}>Serarch</button>
      </form>

      <ul>
        {movies.map((movie) =>( 
          <li key={movie.id}>
            <Link to={`${movie.id}`} state={{ from: location }}>
              <p>{movie.title}</p>
            </Link>
       
          </li>
        ))}
      </ul>
    </div>
  )
}
