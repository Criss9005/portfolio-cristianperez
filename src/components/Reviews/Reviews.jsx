import axios from 'axios';
import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


export default function Reviews() {

    axios.defaults.headers.common['Authorization'] =
   'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNDU3YzgxMzRhZjE3MWM3YTk3NjA3Mjk2MWUyOWY1MSIsInN1YiI6IjY1NzNhZGNmZDQwMGYzMDBjOTIwOTJhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q1IdNqN9HcQoVWvkk0GsmzK0OberDk5bdp3RCC_tmBE';
    
    function ParamId() {
    const reviewID = useParams();
    return reviewID.id
  }
  let reviewID = ParamId()
    const [reviews, setReviews] = useState([])
    useEffect(() => { 
    axios.get(`https://api.themoviedb.org/3/movie/${reviewID}/reviews`)
      .then(response => {
        const data = response.data.results
        setReviews(data)
        
      })
      .catch(e => { 
        console.log(e)
      })
    
  }, [reviewID])
  

    
  return (
    <section>
      
          <ul>{ (reviews.length ) ? reviews.map((rev) =>( 
          <li key={rev.id}>
            <p>{ rev.author}:</p>
            <p>{ rev.content}</p>
          </li>
        )): <p> We don't have any reviews for thie movie</p>}
              
        </ul>  
       
    </section>
  )
}
