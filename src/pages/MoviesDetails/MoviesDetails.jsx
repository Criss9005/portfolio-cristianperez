import React, { useEffect, useState } from 'react'
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './MovieDetails.module.css'

let prevLocation = []
let count = 0

export default function MoviesDetails() {
  axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNDU3YzgxMzRhZjE3MWM3YTk3NjA3Mjk2MWUyOWY1MSIsInN1YiI6IjY1NzNhZGNmZDQwMGYzMDBjOTIwOTJhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q1IdNqN9HcQoVWvkk0GsmzK0OberDk5bdp3RCC_tmBE';
  
  const [movie, setMovie] = useState([])
  const [genres, setGenres] = useState([])
  const location = useLocation();
 
  if (count === 0) { 
    count++;
    prevLocation = location
    //console.log('locacion previa', prevLocation)
  }
  


  let backLinkHref
 if (prevLocation.state.from.pathname === '/') { backLinkHref = prevLocation.state?.from ?? "/"}
  if (prevLocation.state.from.search !== '') { backLinkHref =  prevLocation.state?.from ?? "/movies"}
  
  
  function ParamId() {
    const movieId = useParams();
    //console.log(movieId)
    return movieId.id
  }
  let movieId = ParamId()
  
  useEffect(() => { 
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=THE_KEY&language=en-US&append_to_response=credits`)
      .then(response => {
        const data = response.data
        //console.log(data)
        setMovie(data)
        setGenres(data.genres)
      })
      .catch(e => { 
        console.log(e)
      })
    count=0
  }, [movieId])
  
  function handleGenres() {
    let genre = []
    genres.forEach(gen => { genre.push(gen.name)})
    //console.log(genre)
    return genre.join(', ')
  }
  
    

 return (
   <div className={ styles.moviesContainer}>
     <Link to={backLinkHref}>
       <button >Go back</button>
     </Link>
     
      <div className={styles.divide}>
      <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={`${movie.title} movie`} />
      <div>
          <h1>{movie.title }</h1>
          <h2>Overview</h2>
          <p>{movie.overview }</p>
          <h2>Genres</h2>
          <p>{handleGenres()}</p>
     </div>
     </div>
     <ul className={styles.information }>Aditional Information
       <li>
         <Link to="cast">Cast</Link>
       </li>
       <li>
        <Link to="reviews">Reviews</Link>
       </li>
     </ul>
    <Outlet />  
  </div>
 )
}

