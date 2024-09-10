import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import DiscountCard from './DiscountCard';
import Submenu from './Submenu';
import useResInfo from './utils/useResInfo';

const RestaurantMenu = () => {
  // const [menu, setMenu] = useState(null);
  // const [loading, setLoading] = useState(true);
  const [isFiltered,setIsFiltered] = useState(false);
  // const [error, setError] = useState(null);
  const { id } = useParams(); // Destructure the id directly

  // const fetchMenu = async () => {
  //   try {
  //     const res = await axios.get(
  //       `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.100706&lng=79.0736323&restaurantId=${id}`
  //     );
  //     setMenu(res.data.data.cards);
  //     setLoading(false);
  //   } catch (e) {
  //     console.error(e);
  //     setError('Failed to load menu');
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>{error}</div>;

  const menu = useResInfo(id)


  return (
    <div className="w-[50vw] m-auto ">
     <h1 className='py-10 text-2xl font-bold'>{menu[2].card.card.info.name}</h1>

     <div className='border border-gray-300 p-5 rounded-md shadow-xl' >
      <h3>{menu[2].card.card.info.avgRating}({menu[2].card.card.info.totalRatingsString}) . {menu[2].card.card.info.costForTwoMessage} </h3>
     <p>{menu[2].card.card.info.cuisines.join(', ')}</p>
     <div className="">
      <p>Outlet </p>
      <p>{menu[2].card.card.info.sla.minDeliveryTime}-{menu[2].card.card.info.sla.maxDeliveryTime} mins</p>
      <hr />
      <p>{menu[2].card.card.info.feeDetails.message}</p>
     </div>
     </div>
     <button onClick={()=> setIsFiltered(!isFiltered)} className='px-2 py-1 border-2 mt-4 border-black text-white font-bold bg-green-600 rounded-md'>Veg</button>
    {menu[menu.length-1].groupedCard.cardGroupMap.REGULAR.cards.map((item)=>{
      // console.log(item.card.card?.itemCards)
      return (
        <Submenu data = {item.card.card?.itemCards} filter = {isFiltered} />
      )
    })}
    </div>
  );
};

export default RestaurantMenu;
