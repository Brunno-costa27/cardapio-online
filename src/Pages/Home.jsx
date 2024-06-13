import React from 'react'
import Sidebar from '../components/Sidebar'
import Main from '../components/Main'
export function Home({products}) {
  return (
    <div>
        <Sidebar />
      <div className='w-full p-2 bg-[#9E0000]' >
        <Main products={products}/>
      </div>
    </div>
  )
}