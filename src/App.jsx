import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Header'
import './globals.css'
import Body from './Body'
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom'
import RestaurantMenu from './RestaurantMenu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route element={<Body/>}  path='/' /> 
    <Route element={<RestaurantMenu/>}  path='/restaurants/:id' />
    </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App
