import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './../components/Navbar';

export default function AuthLayOut() {
  return (
    <div className='bg-[#fadc]'>
        <header className='w-11/12 mx-auto'><Navbar></Navbar></header>
        <Outlet></Outlet>
        </div>
  )
}
