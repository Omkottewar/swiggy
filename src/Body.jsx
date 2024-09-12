import React, { useEffect, useState } from 'react';
import {data} from './data.js';
import RestaurantCard from './RestaurantCard';
import { ResMenu, ResName } from './Api/Api.js';
import useOnlineStatus from './utils/useOnlineStatus.js';
import { useContext } from 'react';
import UserContext from './utils/UserContext.js';

const Body = () => {
  const [list, setList] = useState(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  const [filteredList, setFilteredList] = useState(list);

  const getName = async()=>{
      const res = await ResName();
      setList(res)
  }
  const getMenu = async()=>{
    const res = await ResMenu();
    // console.log(res)
}

  useEffect(()=>{
    getName();
    getMenu();
  },[])

  const online = useOnlineStatus()

 if(!online){
  return <h1 className='text-3xl font-bold'>:Looks like you're offline please check your internet connection.</h1>
 }
  return (
    <div className='m-20'>
     <h1 className='text-2xl mb-3 font-bold'>Top restaurant chains in Nagpur</h1>
    <div className=" flex flex-wrap gap-5">
      
      {filteredList?.length > 0 ? (
        filteredList.map((card) => {
return(
  <RestaurantCard name={card.info.name} key={card.info.id} id={card.info.id} image={card.info.cloudinaryImageId} rating={card.info.rating} time={card.info.sla.slaString} category = {card.info.cuisines} />
)
        }

      )) : (
        <p>No restaurants available.</p>
      )}
    </div>
    </div>
   
    
  );
}

export default Body;

