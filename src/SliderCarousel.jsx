import React, { useEffect, useState } from 'react';

import RestaurantCard from './RestaurantCard.jsx';
import { ResMenu, ResName } from './Api/Api.js';
import useOnlineStatus from './utils/useOnlineStatus.js';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderCarousel = ({data}) => {
  const [list, setList] = useState(data);
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

  if (!online) {
    return <h1 className='text-3xl font-bold'>Looks like you're offline, please check your internet connection.</h1>;
  }

  // Slider settings configuration
  const sliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 6, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: false, // Enable autoplay
    autoplaySpeed: 0, // Autoplay speed in milliseconds
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=''>
      <h1 className='text-2xl mb-3 font-bold'>Top restaurant chains in Nagpur</h1>
      {filteredList?.length > 0 ? (
        <Slider {...sliderSettings}>
          {filteredList.map((card) => (
            <RestaurantCard
              name={card.info.name}
              key={card.info.id}
              id={card.info.id}
              image={card.info.cloudinaryImageId}
              rating={card.info.rating}
              time={card.info.sla.slaString}
              category={card.info.cuisines}
            />
          ))}
        </Slider>
      ) : (
        <p>No restaurants available.</p>
      )}
    </div>
  );
};

export default SliderCarousel;
