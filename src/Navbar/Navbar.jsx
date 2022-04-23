import React from 'react'
import './navbar.css' 

export const Navbar = () => {
  return (
    <div className='navbar-main'>
 
        <img 
          src="https://res.cloudinary.com/dsii7wbi4/image/upload/v1650032364/porfolio/menu-regular-24_l42ovc.png" 
          alt="" 
          className='hamburger'
        />
      
        <img 
          src="https://res.cloudinary.com/dsii7wbi4/image/upload/v1650692076/MubiShop/mubi-shop-logo-02_120x_smwy4e.webp"
          alt="" 
          className='logo'
        />
        <img 
          src="https://res.cloudinary.com/dsii7wbi4/image/upload/v1650739023/MubiShop/bx-search-alt-2_brqir0.svg" 
          alt="" 
          className='lupa'
        />
        <img 
          src="https://res.cloudinary.com/dsii7wbi4/image/upload/v1650739956/MubiShop/bxs-cart_y1qny9.svg" 
          alt=""
          className='cart' 
        />

    </div>
  )
}
