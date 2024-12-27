import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Glance from '../components/Glance'
import OtherCities from '../components/OtherCities'

const Home = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Services/>
      <Glance/>
      <OtherCities/>
    </div>
  )
}

export default Home
