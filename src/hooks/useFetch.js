import React, { useEffect, useState } from 'react'

export const useFetch = (apipath,queryTerm="") => {
    const [movies,setMovies] = useState([])
    const url = `https://api.themoviedb.org/3/${apipath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`
    useEffect(()=>{
        const fetchMovies = async()=>{
            const response = await fetch(url)
            const data = await response.json()
            setMovies(data.results)
        }
        fetchMovies()
    },[url])
  return {movies}
}
