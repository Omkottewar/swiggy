import React, { useContext } from 'react'
import CartContext from './utils/CartContext'

const Cart = () => {
    const {items,quantity} = useContext(CartContext);
  return (
    <div className='flex justify-between px-20'>
        <div className="">products</div>
        <div className="">
            <div className="w-96 bg-black text-white">
                {quantity}
            </div>
        </div>
    </div>
  )
}

export default Cart