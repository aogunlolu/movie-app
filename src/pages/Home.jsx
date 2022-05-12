import React from 'react'; 
import Movies from '../components/Movies';
import Popular from '../components/Popular';
import Trending from '../components/Trending';



const Home = () => {
  return (
    <>
      <Movies/>
      <Popular/>
      <Trending/>   
    </>
  )
    
    
}

export default Home