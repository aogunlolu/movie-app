import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { imgPath } from '../img';
import {MdFavorite, MdDashboardCustomize, MdWatchLater} from 'react-icons/md';
import { CgAsterisk} from 'react-icons/cg';
import { BiPlayCircle} from 'react-icons/bi';

  function Search () {
    const [searched, setSearched] = useState([]);
   
   let params = useParams();

    const url = 'https://api.themoviedb.org/3/';
 

    const getSearched = async (name) => {
      const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=f6521014ff685673aa729f8f9bfeadbb&query=${name}
        `
      );
      const response = await data.json();
      setSearched(response.results);
      console.log(searched)
    
      
    }

    useEffect (() => {
      getSearched(params.banner);
  
    },[params.banner])


  return (
    <>
          {searched.map((result) => {
            return(
              <div className='search_card' key={result.id}>
              <div className='card' >
                <img src={`${imgPath}${result.poster_path}`} alt={result.poster_path} />
              </div>
              <div className='card_cont'>
                <h4>{result.original_title}</h4>
                <ul>
                  <li><MdFavorite/></li>
                  <li><MdDashboardCustomize/></li>
                  <li><MdWatchLater/></li>
                  <li><CgAsterisk/></li>
                  <li><BiPlayCircle/></li>
                </ul>
                <p>{result.popularity}</p>
                <p>{result.overview}</p>
                <p>{result.release_date}</p>
                
              </div> 
              </div> 
            )
          })}
    </>
  )
}



export default Search
