import React from 'react'
import { Outlet } from 'react-router-dom'
import NavButtons from './NavButtons'

export default function Layout() {
  return (
    <div>

        <h1 className='font-bold text-5xl m-12'>To Do Application</h1>
        
        <Outlet />

        <NavButtons />

    </div>
  )
}
