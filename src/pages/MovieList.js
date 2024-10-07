import React from 'react'
import { Card } from '../components'
import { useTitle } from '../hooks/useTitle'
import { useFetch } from '../hooks/useFetch'
export const MovieList = ({apipath,title}) => {
  const {movies} = useFetch(apipath)

  useTitle(title)

  return (
   <section className='flex justify-center flex-wrap py-7 gap-5 '>
     {
      movies.map((movie)=>(
        <Card key={movie.id} movie={movie}/>
      ))
     }
    
   </section>
  )
}
