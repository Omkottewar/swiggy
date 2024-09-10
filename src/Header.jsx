import React from 'react'
import logo from '../src/assets/logo.svg'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='flex items-center border-b pb-5 border-gray-500 justify-between px-10'>
        <Link to ='/'><img src={logo} className='w-16' alt="" /></Link>
        <div className="navbar">
            <ul className='flex gap-16'>    
            <li>Home</li>
            <li>About us </li>
            <li>Contact us</li>
            <li>Cart</li></ul>
        </div>
    </div>
  )
}

export default Header