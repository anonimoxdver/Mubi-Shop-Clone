import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import './navbar.css' 

export const Navbar = () => {
  const [acti, setActive] = useState(false)
  return (
    <div className='navbar-main'>
        <button className={acti ?'hamburger active' : 'hamburger '} onClick={() => setActive(!acti)}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>
 
      <a href="/">
                <img 
          src="https://res.cloudinary.com/dsii7wbi4/image/upload/v1650692076/MubiShop/mubi-shop-logo-02_120x_smwy4e.webp"
          alt="" 
          className='logo'
        />
      </a>

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

        <div className={acti ? 'menu-navbar active2' : 'menu-navbar'}>
            <Link to='/' className='home-navbar'>Home</Link>
            <Link to='/' className='shop-navbar'>Shop</Link>
            <div className='networks-navbar'>
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
            

        </div>

    </div>
  )
}
