import React from 'react'
import AboutComp from './AboutComp/AboutComp'
import Achieve from './Achieve/Achieve'
import HeroSection from './HeroSection/HeroSection'
import Join from './Join/Join'
import MissionComp from './MissionComp/MissionComp'

const Home = () => {
  return (
    <>
        <HeroSection />
        <AboutComp />
        <MissionComp />
        <Join/>
        <Achieve />
    </>
  )
}

export default Home