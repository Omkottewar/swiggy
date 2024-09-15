import React from 'react'
import swiggy from './assets/swiggy.png'
const Footer = () => {
  return (
    <div className=' bg-[#F0F0F5] flex items-start gap-[100px] pl-60 py-20 h-full'>
        <div className="">
            <img src={swiggy} alt="" />
            <p className='font-normal'>© 2024 Bundl Technologies Pvt. Ltd</p>
        </div>
        <div className="">
            <h6 className='font-bold'>Company</h6>
            <p>About Us</p>
<p>Swiggy Corporate</p>
<p>Careers</p>
<p>Team</p>
<p>Swiggy One</p>
<p>Swiggy Instamart</p>
<p>Swiggy Dineout</p>
<p>Swiggy Genie</p>

        </div>
        <div className="">
            <div className=""><h6 className='font-bold flex flex-col gap-10 justify-between'>Contact us</h6>
            <p>Help & Support</p>
            <p>Partner with us</p>
            <p>Ride with us</p>

            
            </div>
            <div className=""><h6 className='font-bold mt-165 '>Legal</h6>
            <p>Terms & Conditions</p>
            <p>Cookie Policy</p>
<           p>Privacy Policy</p>
            <p>Investor Relations</p>
            </div>
        </div>
        <div className=""><h6 className='font-bold'>Available in:</h6>
        <p>Nagpur</p></div>
        <div className="">
        <div className=""><h6 className='font-bold'>Life at Swiggy</h6>
        <p>Explore with Swiggy</p>
        <p>Swiggy News</p>
        <p>Snackables</p>

        </div>
        <div className=""><h6 className='font-bold'>Social Links</h6>
        </div>
        </div>
    </div>
  )
}

export default Footer