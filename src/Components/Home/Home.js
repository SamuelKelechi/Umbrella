import React from 'react'
import AboutComp from './AboutComp/AboutComp'
import Achieve from './Achieve/Achieve'
import Advocate from './Advocate/Advocate'
import BlogLink from './BlogLink/BlogLink'
import HeroSection from './HeroSection/HeroSection'
import Join from './Join/Join'
import MissionComp from './MissionComp/MissionComp'
import Support from './Support/Support'
import Team from './Team/Team'

const Home = () => {
  return (
    <>
        <HeroSection />
        <AboutComp />
        <MissionComp />
        <Join/>
        <Achieve />
        <Team />
        <Support />
        <Advocate />
        <BlogLink />
    </>
  )
}

export default Home