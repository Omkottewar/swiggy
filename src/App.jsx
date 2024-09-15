import { useState } from 'react'
import Header from './Header'
import './globals.css'
import Body from './Body'
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom'
import RestaurantMenu from './RestaurantMenu'
import CartContext from './utils/CartContext'
import Cart from './Cart'
import Res from './Res'
import Footer from './Footer'

function App() {
  const [count,setCount] = useState(0);
  const [items,setItems] = useState([])


  return (
    <>
    <BrowserRouter>
    <CartContext.Provider value={{quantity: count,setCount,item:items,setItems}}>
    <Header/>
    <Routes>
    <Route element={<Body/>}  path='/' /> 
    <Route element={<RestaurantMenu/>}  path='/restaurants/:id'/>
    <Route element={<Cart/>}  path='/cart'/>
    <Route element={<Res/>}  path='/res/:id'/>

    </Routes>
    <Footer/>
    </CartContext.Provider>
  
    </BrowserRouter>
   
    </>
  )
}

export default App
