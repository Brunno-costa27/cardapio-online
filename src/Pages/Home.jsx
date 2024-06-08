import React from 'react'
import Sidebar from '../components/Sidebar'
import Main from '../components/Main'
export function Home() {
  return (
    <div>
        <Sidebar />
      <div className='ml-[80px]'>
        <Main/>
      </div>
    </div>
  )
}