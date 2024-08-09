import React from 'react'
import Sidebar from '../components/Sidebar'
import Main from '../components/Main'
export function Home({products}) {
  return (
    <div>
        <Sidebar />
      <div className='w-full h-full sm:h-screen p-2 font-roboto' >
        <Main products={products}/>
      </div>
    </div>
  )
}