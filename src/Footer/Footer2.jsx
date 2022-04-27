import React from 'react'
import { Link } from 'react-router-dom'

import './footer.css'
export const Footer2 = () => {
  return (
    <div className='footer2-main'>
           <div className='networks-footer'>
        <a href="https://twitter.com/mubi">
          <img src="https://res.cloudinary.com/dsii7wbi4/image/upload/v1650756950/MubiShop/bxl-twitter_v1k2nh.svg" alt="" />
        </a>
        <a href="https://www.facebook.com/mubi">
          <img src="https://res.cloudinary.com/dsii7wbi4/image/upload/v1650756953/MubiShop/bxl-facebook-square_wj6jus.svg" alt="" />
        </a>
        <a href="https://www.instagram.com/mubi/">
          <img src="https://res.cloudinary.com/dsii7wbi4/image/upload/v1650756955/MubiShop/bxl-instagram_cvzezg.svg" alt="" />
        </a>
        <a href="https://www.youtube.com/user/mubi">
          <img src="https://res.cloudinary.com/dsii7wbi4/image/upload/v1650756959/MubiShop/bxl-youtube_o2dcni.svg" alt="" />
        </a>
        
        
        
        
      </div>
 
      <p className='copy'>© 2022,<Link to="/">MUBI SHOP</Link></p>
       <a href="https://github.com/anonimoxdver/Mubi-Shop-Clone" className='a-github'>
        
      <div className='div-a'>
             
      
      </div>
</a>
     
       
    </div>
  )
}
