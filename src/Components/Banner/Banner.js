import './Banner.css'
import axios from '../../axios';
import {API_KEY, imageBaseUrl} from '../../constants/constant';
import React, { useEffect, useState } from 'react'

function Banner() {

  const [movie, setMovie] = useState()

  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      // console.log(response.data.results[1]);
      setMovie(response.data.results[2]);
    })
  },[])

  return (
    <div style={{backgroundImage:`URL(${movie ? imageBaseUrl+movie.backdrop_path : ""})`}} className='banner'>
        <div className="content">
            <h1 className="title">{movie ? movie.name : ""}</h1>
            <div className="banner_buttons">
                <button className="button">Play</button>
                <button className="button">My List</button>
            </div>
            <h1 className="description">{movie ? movie.overview : ""}</h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
