import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import { Page } from '../PageMain/Page';
import { Product } from '../Products/Product';
import { aticlesDB} from '../db/xdd.json'
import '../Products/image.css'


export const Navigation = () => {
  return (
    <BrowserRouter >
        <Routes>
            <Route path='/' element={<Page/>} />
            <Route path='/*' element={<Page/>} /> 
        
            {
              aticlesDB.map( aticlesDB=>
                <Route path={aticlesDB.path} key={aticlesDB.id} element={<Product {...aticlesDB} />} />
              )
            }
       
        </Routes>
    </BrowserRouter>
  )
}
