import React from 'react'
import {BiPlusMedical, BiSearch} from 'react-icons/bi';
import { useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import styled from "styled-components"



const Banner = () => {
  // const [movies, setMovies] = useState([])
  const [search, setSearch] = useState(' ')

    const navigate = useNavigate();
  
    const url = 'https://api.themoviedb.org/3/';

  const handleOnSubmit = (e) =>{
    e.preventDefault();
    navigate(`search/'${search}`)
    // getSearch(search)

  }
 

  return (
    <> 
    <header>
        <nav>
          <div className='logo'>
              <Link to='/'><h2>AB.Movies</h2></Link>
            <ul>
                <Link to='/movies' className='list'>Movies</Link>
                <Link to='/tv shows' className='list'>TV Shows</Link>    
            </ul>
          </div>  
            <ul>
                <li className='list' ><BiPlusMedical /></li> 
                <li><span>EN</span></li>
                <Link to='/login' className='list'>Login</Link>
                <Link to='/join us' className='list'>Join us</Link>
                <Link to='/search' className="bi"><BiSearch /></Link>             
            </ul>
        </nav>
        <div className='banner'>
          <div>
            <h1>Welcome.</h1>
            <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
          </div> 
          <form onSubmit={handleOnSubmit}>
              <input className='btn'
              type="text" 
              placeholder='search for movie, tv show, person....'
              onChange={(e)=> setSearch(e.target.value)}  
              />
              <button className='bnt' 
              type="submit"   
              >search</button>
          </form>
        </div>
    </header>
    </>
  )
}


export default Banner