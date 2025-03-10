import React from 'react'
import Hero from '../components/Hero'
import CategoriesHome from '../components/CategoriesHome'
import About from '../components/About'
import NewsLetter from '../components/NewsLetter'
import '../styles/Home.css'

const Home = () => {
  return (
    <div className='homepage'>
        <Hero />
        <CategoriesHome />
        <NewsLetter />
    </div>
  )
}

export default Home