import React from 'react'
import discount from  './assets/discount.png'

const DiscountCard = ({meta}) => {
  return (
    <div>
        <img src={discount} alt="" />
        <p>{meta}</p>
    </div>
  )
}

export default DiscountCard