import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Header'
import './globals.css'
import Body from './Body'
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom'
import RestaurantMenu from './RestaurantMenu'
import CartContext from './utils/CartContext'
import Cart from './Cart'

function App() {
  const [count,setCount] = useState(0);
  return (
    <>
    <BrowserRouter>
    <CartContext.Provider value={{quantity: count,setCount}}>
    <Header/>
    <Routes>
    <Route element={<Body/>}  path='/' /> 
    <Route element={<RestaurantMenu/>}  path='/restaurants/:id'/>
    <Route element={<Cart/>}  path='/restaurants/:id/cart'/>
    </Routes>
    </CartContext.Provider>
   
    </BrowserRouter>
   
    </>
  )
}

export default App
