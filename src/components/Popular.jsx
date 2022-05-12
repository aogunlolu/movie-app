import React from 'react'
import { useEffect, useState } from 'react';
import { Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { imgPath } from '../img';

const Popular = () => {
  const [popular, setPopular] = useState([]);


  useEffect (() => {
    getPopular();

  },[])


  const getPopular = async () => {
    const api = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=f6521014ff685673aa729f8f9bfeadbb&language=en-US&page=1`);
    const data = await api.json();
    const popularresult = data.results;
    // console.log(popularresult);
    setPopular(popularresult)
    
  }
  return (
    <>
    <div className='movies'>
      <div className='option'>
        <h2>Free To Watch</h2>
        <div className='options'>
          <h4>Movies</h4>
          <h4>Tv</h4>
          </div>
        </div>
        <Splide options={{
          perPage: 6,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: '20px',
          
        }}>
          {popular.map((result) => {
            return(
              <SplideSlide className='cards' key={result.id}>
              <div className='card' >
                <img src={`${imgPath}${result.backdrop_path}`} alt={result.backdrop_path} />
              </div>
              <div className='card_cont'>
              <p>{result.vote_average}</p>
                <h4>{result.name}</h4> 
                <p>{result.first_air_date}</p>  
              </div> 
              </SplideSlide> 
            )
          })}
      </Splide>
    </div>
    </>
  )
}

export default Popular