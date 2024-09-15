import React, { useContext } from 'react'
import logo from '../src/assets/logo.svg'
import { Link } from 'react-router-dom'
import userContext from './utils/UserContext'
import CartContext from './utils/CartContext'
const Header = () => {

  const {quantity} = useContext(CartContext)

  return (
    <div className='flex items-center border-b pb-5 border-gray-500 justify-between px-10'>
        <Link to ='/'><img src={logo} className='w-16' alt="" /></Link>
        <div className="navbar">
            <ul className='flex gap-16'>    
            <li>Home</li>
            <li>About us </li>
            <li>Contact us</li>
            <li> <Link to='/cart'> Cart {quantity}</Link> </li>
            </ul>
        </div>
    </div>
  )
}

export default Header