import React from 'react'
import Home from './Home'
import { Route, Routes} from "react-router-dom";
import Movies from '../components/Movies';
import Popular from '../components/Popular';
import Trending from '../components/Trending';
import Search from './Search';







const Pages = () => {
  return (
      <Routes>
           <Route path="/" element={<Home />} />
           <Route path="movies" element={<Movies/>} />
           <Route path="popular" element={<Popular />} />
           <Route path="trending" element={<Trending />}/> 
           <Route path="search/:banner" element={<Search />}/>  
       </Routes>
     
  );
}

export default Pages

