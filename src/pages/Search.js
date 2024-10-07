import React from 'react'
import { Card } from '../components'
import { useFetch } from '../hooks/useFetch'
import { useSearchParams } from 'react-router-dom'

export const Search = ({apipath}) => {

  const [searchParams] = useSearchParams()

  const queryTerm = searchParams.get('q')

  const {movies} = useFetch(apipath,queryTerm)

  return (
    <>
    <section>
      <p className='text-3xl text-white py-7 px-36'>{queryTerm?`No Results found for ${queryTerm}`:`No results found for ${queryTerm}`}</p>
    </section>

    
    <section className='flex justify-center flex-wrap py-7 gap-5 '>
    {
     movies.map((movie)=>(
       <Card key={movie.id} movie={movie}/>
     ))
    }
   
  </section>
  </>
  )
}
