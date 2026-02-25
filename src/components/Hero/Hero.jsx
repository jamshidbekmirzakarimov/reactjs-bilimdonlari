import React from 'react'
import HeroTop from './HeroTop/HeroTop'
import HeroCard from './HeroCard/HeroCard'
import './Hero.css'
const Hero = () => {
  return (
    <div className='hero'>
      <HeroTop/>
      <div className='hero-bottom'>
      <HeroCard/>
      <HeroCard/>
      <HeroCard/>
      </div>
    </div>
  )
}

export default Hero
