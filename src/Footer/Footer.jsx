import React from 'react'
import './footer.css'
export const Footer = () => {
  return (
    <div className='footer-main'>
      <div className='welcome'>
         <h3 className='welcome-footer'>Welcome to the MUBI SHOP</h3>
        <p className='p-footer'>
          Here you’ll find an exclusive collection of hand-picked items.
          Every one is unique, and designed by us. The MUBI SHOP is now open in the UK only.
          We hope to launch in more countries in 2022.
        </p>
      </div>
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
 
      <p className='copy'>© 2022,<a href="https://shop.mubi.com/">MUBI SHOP</a></p>
       
    </div>
  )
}
