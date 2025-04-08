import React from 'react'
import Nav from '../component/Nav/Nav'
import { Outlet } from 'react-router-dom'


function Layout() {
  return (
    <div>
        <Nav/>
        <Outlet/>
    </div>
  )
}

export default Layout
