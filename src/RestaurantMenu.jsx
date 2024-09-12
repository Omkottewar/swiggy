import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DiscountCard from './DiscountCard';
import { ResMenu } from './Api/Api';
import useResInfo from './utils/useResInfo';
import RestaurantCategory from './RestaurantCategory';
import Shimmer from './Shimmer';

const RestaurantMenu = () => {
  const { id } = useParams(); 
  const [menu, setMenu] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isFiltered, setIsFiltered] = useState(false);
  const [error, setError] = useState(null);
  const [open,setOpen] = useState(0);
// Destructure the id directly

  // Fetch restaurant menu data
  const getData = async () => {

    try {
      const res = await ResMenu(id);
      setMenu(res.data.data.cards);
      console.log(res)
    } catch (e) {
      console.error('Error fetching menu:', e);
      setError('Failed to load menu');
    } finally {
      setLoading(false); // Ensure loading is set to false after data is fetched
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  if (loading) return <Shimmer/>;
  if (error) return <div>{error}</div>;
  if (!menu) return <div>No menu data available</div>;

  // console.log(menu[3].groupedCard.cardGroupMap.REGULAR.cards)

const category = menu[menu?.length-1]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")






  return (
    <div className="w-[50vw] m-auto">
      {/* Render restaurant information if available */}
      {menu[2]?.card?.card?.info && (
        <>
          <h1 className="py-10 text-2xl font-bold">{menu[2].card.card.info.name}</h1>
          <div className="border border-gray-300 p-5 rounded-md shadow-xl">
            <h3>
              {menu[2].card.card.info.avgRating} ({menu[2].card.card.info.totalRatingsString}) .{' '}
              {menu[2].card.card.info.costForTwoMessage}
            </h3>
            <p>{menu[2].card.card.info.cuisines.join(', ')}</p>
            <div className="">
              <p>Outlet</p>
              <p>
                {menu[2].card.card.info.sla.minDeliveryTime}-{menu[2].card.card.info.sla.maxDeliveryTime} mins
              </p>
              <hr />
              <p>{menu[2].card.card.info.feeDetails.message}</p>
            </div>
          </div>
        </>
      )}
        <div className="">
          {category.map((type,index)=>{
            return(
              <RestaurantCategory setOpen={()=>setOpen(index)} 
               open={index===open?true:false} key={index} data={type?.card?.card} index={index} />
            )
          })}
        </div>
    </div>
  );
};

export default RestaurantMenu;
