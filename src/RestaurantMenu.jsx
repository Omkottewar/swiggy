import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DiscountCard from './DiscountCard';
import Submenu from './Submenu';
import { ResMenu } from './Api/Api';
import useResInfo from './utils/useResInfo';

const RestaurantMenu = () => {
  const [menu, setMenu] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isFiltered, setIsFiltered] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams(); // Destructure the id directly

  // Fetch restaurant menu data
  const getData = async () => {
    try {
      const res = await ResMenu(id);
      setMenu(res.data.data.cards);
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


  // const menu = useResInfo(id)

  // Render loading or error states
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!menu) return <div>No menu data available</div>;

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
      
      <button
        onClick={() => setIsFiltered(!isFiltered)}
        className="px-2 py-1 border-2 mt-4 border-black text-white font-bold bg-green-600 rounded-md"
      >
        Veg
      </button>

      {/* Render submenu items if available */}
      {menu[menu.length - 1]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map((item, index) => {
        console.log(item.card.card?.itemCards)
        return <Submenu key={index} data={item.card.card?.itemCards} filter={isFiltered} />;
      })}
    </div>
  );
};

export default RestaurantMenu;
