import React from 'react'
import { useEffect, useState } from 'react';
import { Splide, SplideSlide} from '@splidejs/react-splide';
import Styled from 'styled-components';
import '@splidejs/react-splide/css';
import { imgPath } from '../img';

const Trending = () => {
  const [trending, setTrending] = useState([]);
  
const url = 'https://api.themoviedb.org/3'

  useEffect (() => {
    getTrending();

  },[])

  const getTrending = async () => {
    const type = trending ? 'day' : 'week';
    const api = await fetch(`${url}/trending/all/${type}?api_key=f6521014ff685673aa729f8f9bfeadbb`);
    const data = await api.json();
    const trendingresult = data.results;
    console.log(trendingresult);
    setTrending(trendingresult)


  }
  const toggleTab = (index) =>{
    setTrending(index)
  } 

  return (
    <>
 <div className='movies'>
      <div className='option'>
        <h2>Trending</h2>
        <div className='options' >
          <h4 
          onClick={() => toggleTab (1)}>Today</h4>
          <h4 
          onClick={() => toggleTab (2)}>This Week</h4>
          </div>
        </div>
        <Splide options={{
          perPage: 6,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: '20px',
          
        }}>
          {trending.map((result) => {
            return(
              <SplideSlide className='cards' key={result.id}>
              <div className='card' >
                <img src={`${imgPath}${result.backdrop_path}`} alt={result.backdrop_path} />
              </div>
              <div className='card_cont'>
              <p>{result.vote_average}</p>  
              <h4>{result.title} {result.name}</h4>     
              <p>{result.release_date} {result.first_air_date}</p>  
              </div> 
              </SplideSlide> 
            )
          })}
      </Splide>
    </div>

    </>
  )
}

export default Trending