import React from 'react'
import Sidebar from '../components/common/Sidebar'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
        <Sidebar/>
        <main>
            <Outlet></Outlet>
        </main>
    </div>
    
  )
}

export default AppLayout