import React from 'react'
import Logo from '../assets/images/Logo.svg'
import { Link } from 'react-router-dom'
export const PageNotFound = () => {
  return (
    <section>
      <div className=''>
        <p className='text-center text-5xl text-white'>404 oops</p>
        <div className='w-screen   flex justify-center items-start py-20'>
        <img src={Logo} alt="" className=' max-w-lg'/>
        </div>
      </div>
      <div className='text-center'>
        <Link to="/">
        <button className='px-8 py-2 font-medium text-xl bg-black text-white dark:text-white dark:bg-black'>Back to Home</button>
        </Link>
      </div>
    </section>
  )
}
