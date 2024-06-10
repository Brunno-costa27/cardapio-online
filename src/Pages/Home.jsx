import React from 'react'
import Sidebar from '../components/Sidebar'
import Main from '../components/Main'
export function Home() {
  return (
    <div>
        <Sidebar />
      <div className='w-full sm:ml-[80px]'>
        <Main/>
      </div>
    </div>
  )
}