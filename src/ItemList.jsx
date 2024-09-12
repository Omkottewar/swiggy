import React, { useContext } from 'react'

import Veg from './assets/veg.png'
import NonVeg from './assets/nonveg.png'
import CartContext from './utils/CartContext'

const ItemList = (items) => {
    console.log(items.items)


    const {quantity,setCount} = useContext(CartContext);

  return (
    <div className='w-full '>
        {items.items.map((item,index) => 
        <div className="w-full  border border-gray-300 rounded-md shadow-xl  my-5 px-4 py-8">
       <div className="w-5 mb-3">     {item.card.info.isVeg?(<img src={Veg} />)
       :(<img src={NonVeg}/>)}</div>
            <div key={index} className="flex flex-row justify-between ">
        <div className='flex flex-col '> 
            <span className='font-bold'>{item.card.info.name}</span>
            <span className='font-bold'>Rs {item.card.info.price?item.card.info.price / 100:item.card.info.defaultPrice / 100}</span>
            <span className='text-green-900 font-bold' >
                {item.card.info.ratings?.aggregatedRating.rating?item.card.info.ratings?.aggregatedRating.rating:''} <span className='text-black font-normal'>{item.card.info.ratings?.aggregatedRating.ratingCountV2?(item.card.info.ratings?.aggregatedRating.ratingCountV2):''} </span>
            </span>
            <span className='text-gray-500 w-[550px]'>Description: {item.card.info.description}</span>
        </div>
        <div className="h-full relative">
            <img className='w-40 rounded-md h-full shadow-lg' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.card.info.imageId} `}alt="" />
            <button onClick={()=>setCount(quantity+1)} className='text-green-500 absolute left-10 top-24 font-bold w-20 bg-white py-1 px-2 border shadow-md rounded-xl' >ADD +</button>
        </div>
        </div>
        </div>
        
       )}
      
    </div>

  )
}

export default ItemList