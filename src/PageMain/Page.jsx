import React from 'react'
import { ArticlesMain } from '../articles/ArticlesMain'
import { Navbar } from '../Navbar/Navbar'
import { Footer } from '../Footer/Footer'

export const Page = () => {
  return (
    <div>
        <Navbar/>
        <ArticlesMain />
        <Footer/>
    </div>
  )
}
