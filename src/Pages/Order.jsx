import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import {BsArrowLeft} from 'react-icons/bs'
export function Order() {
  return (
    <div className='w-full h-screen flex justify-center items-center font-roboto'>
    <div className='space-y-5 flex flex-col justify-center items-center '>
      <h1 className='text-xl font-semibold'>You don't have any ordered products</h1>
      <NavLink to='/'>
      <button className='bg-gray-800 text-white px-5 py-2 rounded-m drop-shadow-xl flex items-center space-x-2'>
        <Link to="/">
          <span>De volta à loja</span>
        </Link>
        <BsArrowLeft/>
      </button>
      </NavLink>
    </div>
  </div>
  )
}