import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';



export default function Cast() {

    axios.defaults.headers.common['Authorization'] =
   'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNDU3YzgxMzRhZjE3MWM3YTk3NjA3Mjk2MWUyOWY1MSIsInN1YiI6IjY1NzNhZGNmZDQwMGYzMDBjOTIwOTJhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q1IdNqN9HcQoVWvkk0GsmzK0OberDk5bdp3RCC_tmBE';
    
    function ParamId() {
    const castID = useParams();
    return castID.id
  }
  let castID = ParamId()
    const [cast, setCast] = useState([])
    useEffect(() => { 
    axios.get(`https://api.themoviedb.org/3/movie/${castID}?api_key=THE_KEY&language=en-US&append_to_response=credits`)
      .then(response => {
          const data = response.data.credits.cast
         // console.log(data)
        setCast(data)
        
      })
      .catch(e => { 
        console.log(e)
      })
    
  }, [castID])


  return (
    <section>
          <ul style={{ listStyle: 'none' }}>{ (cast.length ) ? cast.map((cas) =>( 
          <li key={cas.cast_id}>
          <img src={`https://image.tmdb.org/t/p/w200${cas.profile_path}`} width="100px"  alt="" />
          <p>{cas.original_name}</p>
          <p>{cas.character }</p>
          </li>
        )): <p> We don't have any cast members for thie movie</p>}
              
          </ul>  
    </section>
  )
}
