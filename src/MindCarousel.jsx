import React from 'react'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const MindCarousel = ({data}) => {


    const sliderSettings = {
        arrow:true,
        dots: true,
        infinite: false,
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
              infinite: false,
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
    <h1 className='text-2xl mb-3 font-bold'>What's on You Mind ?</h1>
    {data?.length > 0 ? (
      <Slider {...sliderSettings}>
        {data.map((card)=>{
            const id = card.action.link;
            const text = id.substring(35, 41); 
            return(
              <Link  key={card.id}  to={`/res/${text}`}>
               <div className='cursor-pointer'>
                <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${card.imageId}`} alt="" />
                </div>
              </Link>
               
            )
        })}
      </Slider>
    ) : (
      <p>No restaurants available.</p>
    )}
  </div>
  )
}

export default MindCarousel