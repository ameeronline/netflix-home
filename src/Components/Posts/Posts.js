import './Posts.css'
import React, {useEffect, useState} from 'react'
import axios from '../../axios';
import { imageBaseUrl } from '../../constants/constant';
import YouTube from 'react-youtube';

function Posts(props) {
  const [movies,setMovies] = useState([])
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      console.log(response.data)
      setMovies(response.data.results)
    }).catch(err=>{
      console.log(err)
    })
  })

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
    
    <div className='row'>
      <h2>{props.title}</h2>

      <div className="posters">
        {movies.map((obj)=>
        <img className={props.isSmall ? 'small-poster' : 'poster'} src={`${imageBaseUrl+obj.backdrop_path}`} alt="Poster" />
        )}
        
      </div>
    </div>
  )
}

export default Posts
