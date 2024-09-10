import React, { useEffect, useState } from 'react';

const Submenu = ({ data, filter }) => {
  const [list, setList] = useState(data);
  const [filteredlist, setFilteredList] = useState(list);
  const [isFilter,setIsFilter] = useState(filter)
    // console.log(filter)
  useEffect(()=>{
    // setIsFilter(true)
    if(isFilter){

        const data = list?.filter((res)=>{
            return (
                res.card.info.isVeg == '1'
            )
        })
        console.log(data)
        setFilteredList(data);
        
    }
    
  },[isFilter])

  return (
   <div className="">
    <ul className='mt-5  p-4 rounded-md border border-gray-300 shadow-xl'>
    {filteredlist?.map((item)=>{
        // console.log(item)
        return (
            <div className="">
                <li className='mt-4 flex justify-between gap-20'><div className="">
                <p>{item.card.info.name}</p>
                <p>₹ {item.card.info.price/100}</p>
                <p className='text-gray-400 text-sm'>{item.card.info.description}</p>
                </div> <img className='w-24' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.card.info.imageId}`} alt="" />
                </li>
                <hr className='mt-3 border-gray-400' />
            </div>
            
        )
    })}
    </ul>
    
   </div>
  );
};

export default Submenu;

