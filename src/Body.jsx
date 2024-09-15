import React, { useEffect, useState } from 'react';
import { Data } from './data.js';
import useOnlineStatus from './utils/useOnlineStatus.js';
import SliderCarousel from './SliderCarousel.jsx';
import MindCarousel from './MindCarousel.jsx';
import RestaurantCard from './RestaurantCard.jsx';

const Body = () => {
  const [list, setList] = useState(Data);
  const [filteredList, setFilteredList] = useState(list);


  const getName = async () => {
    const res = await ResName();
    setList(res);
  };

  const getMenu = async () => {
    const res = await ResMenu();
    // console.log(res)
  };

  useEffect(() => {
    getName();
    getMenu();
  }, []);


  const online = useOnlineStatus();
 if(!online){
  return <h1 className='text-3xl font-bold'>:Looks like you're offline please check your internet connection.</h1>
 }
  return (
    <div className='mx-40 my-10 flex flex-col gap-20 relative'>
      <div className="">
      <MindCarousel data={list.data.cards[0].card.card.gridElements.infoWithStyle.info}/>
      </div>
    <div className=" gap-5">
      <SliderCarousel data={list.data.cards[1].card.card.gridElements.infoWithStyle.restaurants}/>
    </div>
<div className="top-0">
  <h1 className='text-3xl font-bold mb-10'>Restaurants In Nagpur </h1>
<div className="flex flex-wrap  gap-5 ">
      {list?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants.map((card)=>{
    
        return(
          <RestaurantCard
              name={card.info.name}
              key={card.info.id}
              id={card.info.id}
              image={card.info.cloudinaryImageId}
              rating={card.info.rating}
              time={card.info.sla.slaString}
              category={card.info.cuisines}
            />
        )
      })}
    </div>
</div>
    
    </div>
   
    
  );
}

export default Body;

