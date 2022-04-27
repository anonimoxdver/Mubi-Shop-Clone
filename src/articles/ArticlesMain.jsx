import React from 'react'
import { Articles } from './Articles'
import './articles.css'
export const ArticlesMain = () => {
  return (
    <div className='articles-main'>
      <a href="/papas-got-a-brand-blue-bag">
        <Articles
          imgback={'imgback1'}
          nameOfProduct='Canvas Tote Bag'
          descripcionOfProduct='Papas Got a Brand Blue Bag'
          price='£20'
        />
      </a>

      <a href="/the-same-old-brand-new-bag">
                <Articles 
          imgback={'imgback2'} 
          nameOfProduct='Limited Edition Canvas Tote Bag'
          descripcionOfProduct='The Same Old Brand New Bag'
          price='£25'
        />
      </a>

      <a href="/breathless">
         <Articles 
          imgback={'imgback3'} 
          nameOfProduct='Limited Edition Mug'
          descripcionOfProduct='BREATHLESS'
          price='£15'
        />        
      </a>

      <a href="/ema">
        <Articles 
          imgback={'imgback4'} 
          nameOfProduct='Limited Edition Poster'
          descripcionOfProduct='EMA'
          price='£25'
        />        
      </a>

        <a href="/limbo">
        <Articles 
          imgback={'imgback5'} 
          nameOfProduct='Official Poster'
          descripcionOfProduct='LIMBO'
          price='£25'
        />
        </a>

        <a href="/under-the-silver-lake">
        <Articles 
          imgback={'imgback6'} 
          nameOfProduct='Limited Edition Poster'
          descripcionOfProduct='UNDER THE SILVER LAKE'
          price='£25'
        />
        </a>

        
       
        
    </div>
  )
}
