import React from 'react'
import './articles.css'
  const image = 'https://res.cloudinary.com/dsii7wbi4/image/upload/v1650741555/MubiShop/MUBISHOP_LIMBO_1_updated_c4356ba4-cc54-4b25-a2e4-9be9845fa8dd_300x_zhozwk.webp'
const nameOfProduct = 'Canvas Tote Bag'
const descripcionOfProduct = 'Papas Got a Brand Blue Bag'
const price = '£20'
export const Articles = ({imgback, nameOfProduct, descripcionOfProduct, price}) => {

  return (
    <div className={`${imgback}  img-main` }>
      <div className='description_main'>
        <div className='descripcion'>
          <span className="title-content">{nameOfProduct} </span>
          <span className="title-content title-secont">{descripcionOfProduct} </span>
          <span className="title-content title-third">{price} </span> 
      </div>
      </div>
      
      
  

    </div>
  )
}
