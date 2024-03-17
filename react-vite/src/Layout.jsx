import React from 'react'
import {Outlet} from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
function Layout() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout