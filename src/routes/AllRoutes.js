import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { MovieList,MovieDetail,Search,PageNotFound } from '../pages'
export const AllRoutes = () => {
  return (
    
    <Routes>
        <Route path='/' element={<MovieList apipath="movie/now_playing"  title="Home"/>} />
        <Route path='/movie/:id' element={<MovieDetail/>} />
        <Route path='/movies/popular' element={<MovieList apipath="/movie/popular" title="popular/cinemate"/>} />
        <Route path='/movies/top' element={<MovieList apipath="/movie/top_rated"  title="TOp/cinemate"/>} />
        <Route path='/movies/upcoming' element={<MovieList apipath="/movie/upcoming"  title="upcoming/cinemate"/>} />
        <Route path='search' element={<Search apipath="/search/movie"  title="search/cinemate"/>} />
        <Route path='*' element={<PageNotFound  title="/pagenotfound/cinemate"/> } />
    </Routes>
  )
}
