import React, { useState } from 'react'
import Arrow from './assets/arrow.png'
import ItemList from './ItemList'

const RestaurantCategory = ({data ,open, setOpen,index}) => {
    function handler(){
        setOpen()
    }
  return (
    <div  className='w-[50vw] mx-auto my-4 bg-gray-100 border border-gray-300 rounded-md  px-2 py-3 shadow-xl border '>
        <div className="  flex justify-between items-center"onClick={()=>handler()} >
        <span className='font-bold'>{data.title} ({data.itemCards.length})</span>
        <span ><img className='w-5 bg-blue-400 rounded-sm p-0.5 ' src={Arrow} alt="" /></span>
        
        </div>
        <div className="text-left py-4 ">{open&&<ItemList items={data.itemCards} />}</div>
    </div>
  )
}

export default RestaurantCategory