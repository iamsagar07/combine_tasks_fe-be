import React from 'react'
import Sidebar from '../components/common/Sidebar'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex h-[98vh] gap-4 '>
      <div className='bg-gray-900 w-1/6 border rounded-xl p-4 flex flex-col justify-between'>
        <Sidebar />
      </div>
      <div className=' w-5/6 border rounded-xl p-4'>
        <Outlet />
      </div>
    </div>
  )
}

export default Home
