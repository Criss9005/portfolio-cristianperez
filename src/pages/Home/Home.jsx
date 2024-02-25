import axios from "axios"
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom";


export default function Home() {

    axios.defaults.headers.common['Authorization'] =
   'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNDU3YzgxMzRhZjE3MWM3YTk3NjA3Mjk2MWUyOWY1MSIsInN1YiI6IjY1NzNhZGNmZDQwMGYzMDBjOTIwOTJhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q1IdNqN9HcQoVWvkk0GsmzK0OberDk5bdp3RCC_tmBE';
  const location = useLocation()
  
  const [movies, setMovies] = useState([])
  
    useEffect(() => { 
       
    axios.get(`https://api.themoviedb.org/3/trending/movie/day?language=en-US`)
      .then(response => {
        const data = response.data.results
        //console.log(data)
        setMovies(data)
      })
      .catch(e => { 
        console.log(e)
      })
      
      
  
  }, [])



    
  return (
      <div>
          <h1>Trending Today</h1>
         <ul>
        {movies.map((movie) =>( 
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`} state={{ from: location }}><p>{movie.title}</p></Link>
            
          </li>
        ))}
      </ul>
      
      </div>
  )
}
