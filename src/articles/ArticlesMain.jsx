import React from 'react'
import { Products } from './Products'
import './products.css'
export const ArticlesMain = () => {
  return (
    <div className='articles-main'>
        <Products 
          imgback={'imgback1'}
          nameOfProduct='Canvas Tote Bag'
          descripcionOfProduct='Papas Got a Brand Blue Bag'
          price='£20'
        />
        <Products 
          imgback={'imgback2'} 
          nameOfProduct='Limited Edition Canvas Tote Bag'
          descripcionOfProduct='The Same Old Brand New Bag'
          price='£25'
        />
         <Products 
          imgback={'imgback3'} 
          nameOfProduct='Limited Edition Mug'
          descripcionOfProduct='BREATHLESS'
          price='£15'
        />
        <Products 
          imgback={'imgback4'} 
          nameOfProduct='Limited Edition Poster'
          descripcionOfProduct='EMA'
          price='£25'
        />
        <Products 
          imgback={'imgback5'} 
          nameOfProduct='Official Poster'
          descripcionOfProduct='LIMBO'
          price='£25'
        />
        <Products 
          imgback={'imgback6'} 
          nameOfProduct='Limited Edition Poster'
          descripcionOfProduct='UNDER THE SILVER LAKE'
          price='£25'
        />
        
       
        
    </div>
  )
}
