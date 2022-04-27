import React from 'react'
import { ArticlesMain } from '../articles/ArticlesMain'
import { Navbar } from '../Navbar/Navbar'
import { Footer } from '../Footer/Footer'
import { Footer2 } from '../Footer/Footer2'
Footer2

export const Page = () => {
  return (
    <div>
        <Navbar/>
        <ArticlesMain />
        <Footer/>
        <Footer2/>
    </div>
  )
}
