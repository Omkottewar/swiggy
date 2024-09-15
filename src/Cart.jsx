import React, { useContext, useState, useEffect } from 'react';
import CartContext from './utils/CartContext';

const Cart = () => {
  const { quantity, item, setItems, setCount } = useContext(CartContext);
  const [price, setPrice] = useState(0);

  // Update the total price whenever the items in the cart change
  useEffect(() => {
    const totalPrice = item.reduce((acc, product) => {
      return acc + product.price * product.itemQuantity;
    }, 0);
    setPrice(totalPrice);
  }, [item]);

  // Handler function to increment item quantity
  const incrementQuantity = (product) => {
    const updatedItems = item.map((i) => {
      if (i.id === product.id) {
        setCount(quantity + 1);
        return { ...i, itemQuantity: i.itemQuantity + 1 };
      }
      return i;
    });
    setItems(updatedItems);
  };

  // Handler function to decrement item quantity
  const decrementQuantity = (product) => {
    const updatedItems = item
      .map((i) => {
        if (i.id === product.id) {
          if (product.itemQuantity === 1) {
            setCount(quantity - 1);
            return null;
          } else {
            setCount(quantity - 1);
            return { ...i, itemQuantity: i.itemQuantity - 1 };
          }
        }
        return i;
      })
      .filter((i) => i !== null);
    setItems(updatedItems);
  };

  return (
    <div className="flex justify-between px-20">
      <div className="h-96 text-white w-6/12 px-4 m-10 ">
        <h1 className="text-black text-3xl font-bold">Your Items...</h1>
        {item.length > 0 ? (
          item.map((product) => {
            return (
              <div key={product?.id} className="bg-gray-600 mt-5 shadow-2xl rounded-sm">
                <div className="flex justify-between">
                  <div className='px-2 py-1'>
                    <h3>{product.name}</h3>
                    <p>Quantity: {product.itemQuantity}</p>
                    <p>Rs {product.price / 100}</p>
                    <div className="flex p-2 gap-2 mt-2">
                      <button
                        className="text-black bg-white py-1 px-2 rounded-sm"
                        onClick={() => incrementQuantity(product)}
                      >
                        +
                      </button>
                      <button
                        className="text-black bg-white py-1 px-2 rounded-sm"
                        onClick={() => decrementQuantity(product)}
                      >
                        -
                      </button>
                    </div>
                  </div>
                  <img
                    className="w-32 rounded-tr-sm rounded-br-sm"
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${product?.image}`}
                    alt={product.name}
                  />
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-black text-2xl mt-10 border border-black w-fit px-4 py-2">Please add items to the cart.</p>
        )}
        {item.length > 0 && (
          <h2 className="text-black text-xl font-bold mt-5">Total Price: Rs {price / 100}</h2>
        )}
      </div>
      <div className="border border-gray-800 w-96 h-auto p-4 mt-16 shadow-xl">
        <h1 className='text-4xl font-bold'>Cart</h1>
        <div className="">
            {item.map((product)=>{
                return(
                    <div className="my-3 border border-gray-400 p-2 flex justify-between" key={product.name}>
                       <div className="">
                       <h1 className='text-black'>{product.name}</h1>
                       <p>Rs {Math.floor(product.price/100)}</p>
                       </div>
                        <img  className='w-16' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${product?.image}`} alt="" />
                    </div> 
                )
            })}
        </div>
        <p>Total Price = Rs {Math.floor(price/100)}</p>
      </div>
    </div>
  );
};

export default Cart;
