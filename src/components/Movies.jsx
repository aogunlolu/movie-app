import React from 'react'
import { useEffect, useState } from 'react';
import { Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { imgPath } from '../img';


  function Movies () {
    const [movies, setMovies] = useState([]);


    useEffect (() => {
      getMovies();
  
    },[])


    const getMovies = async () => {
      const api = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=f6521014ff685673aa729f8f9bfeadbb&language=en-US&page=1`);
      const data = await api.json();
      const moviesresult = data.results;
      // console.log(moviesresult);
      setMovies(moviesresult)
      
    }

  return (
    <>
    <div className='movies'>
      <div className='option'>
        <h2>What's Popular</h2>
        <div className='options'>
          <h4>Streaming</h4>
          <h4>On Tv</h4>
          <h4>For Rent</h4>
          <h4>In Theaters</h4>
          </div>
        </div>
        <Splide options={{
          perPage: 6,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: '20px',
          
        }}>
          {movies.map((result) => {
            return(
              <SplideSlide className='cards' key={result.id}>
              <div className='card' >
                <img src={`${imgPath}${result.backdrop_path}`} alt={result.backdrop_path} />
              </div>
              <div className='card_cont'>
                <p>{result.vote_average}</p>
                <h4>{result.title}</h4>    
                <p>{result.release_date}</p>  
              </div> 
              </SplideSlide> 
            )
          })}
      </Splide>
    </div>
    </>
  )
}



export default Movies

