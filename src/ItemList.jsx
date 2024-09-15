import React, { useContext } from 'react';
import Veg from './assets/veg.png';
import NonVeg from './assets/nonveg.png';
import CartContext from './utils/CartContext';

const ItemList = ({ items }) => {
  // Destructure the context to access needed values
  const { quantity, item, setItems,setCount } = useContext(CartContext);

  // Handler function to add item details to the context
  const handler = (item) => {
    console.log(item)
    const obj = {
      name: item.name,
      image: item.imageId,
      id: item.id,
      price:item.price,
      itemQuantity : 1
    };

    // Assuming setItems is a function to update context state
    setItems((prevItems) => [...prevItems, obj]);
    setCount(quantity+1)
  };

  return (
    <div className="w-full">
      {items.map((item, index) => {
        const info = item.card.info; // Extract info for cleaner code
        return (
          <div
            key={info.id}
            className="w-full border border-gray-300 rounded-md shadow-xl my-5 px-4 py-8"
          >
            <div className="w-5 mb-3">
              {info.isVeg ? <img src={Veg} alt="Veg Icon" /> : <img src={NonVeg} alt="Non-Veg Icon" />}
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-col">
                <span className="font-bold">{info.name}</span>
                <span className="font-bold">
                  Rs {info.price ? info.price / 100 : info.defaultPrice / 100}
                </span>
                <span className="text-green-900 font-bold">
                  {info.ratings?.aggregatedRating?.rating || ''}
                  <span className="text-black font-normal">
                    {info.ratings?.aggregatedRating?.ratingCountV2 || ''}
                  </span>
                </span>
                <span className="text-gray-500 w-[550px]">
                  Description: {info.description}
                </span>
              </div>
              <div className="h-full relative">
                <img
                  className="w-40 rounded-md h-full shadow-lg"
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${info.imageId}`}
                  alt={info.name}
                />
                <button
                  onClick={() => handler(info)}
                  className="text-green-500 absolute left-10 top-24 font-bold w-20 bg-white py-1 px-2 border shadow-md rounded-xl"
                >
                  ADD +
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
