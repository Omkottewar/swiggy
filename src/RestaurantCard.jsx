import React,{useState} from 'react'
import {Data} from './ResData';

import { Link } from 'react-router-dom';
const RestaurantCard = ({name,rating,time,image ,id,category}) => {
  return (
    <div className="w-[200px] h-[230px] p-2 " key={id}>
      <Link to={`/restaurants/${id}`}>
      <img className="w-[100%] h-[70%] rounded-md shadow-xl bg-gradient-to-b " src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${image}`} alt="" />
   
   <div className="ml-2">
   <h2>{name}</h2>
  <p className='flex'><span>{rating}</span><span>{time}</span></p> 
   <span className='flex flex-wrap gap-2 text-gray-700'>
   {category.slice(0,2).map((e,index)=>{
     return (
       <p key={index} >{e}</p>
     )
   })}
   </span>
   </div>
      </Link>
  </div>
  )
}

export default RestaurantCard