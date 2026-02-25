import React from 'react'
import './HeroTop.css'
const HeroTop = () => {
  return (
    <div className='hero-top-section'>
      <div className='hero-top'>
        <h1 className='hero-top-title'>LIVE YOUR DAY WITH MUSIC</h1>
        <p className='hero-top-desc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum consequuntur molestiae quidem </p>
      </div>
      <div className='hero-top-bottom'>
        <button className='hero-top-btn1'>Nimadurlar</button>
        <button className='hero-top-btn2'>Learn More</button>
      </div>
      <img className='hero-image' src="https://img.freepik.com/free-photo/businessman-shows-his-finger-up_329181-9112.jpg?semt=ais_user_personalization&w=740&q=80" alt="" />
    </div>
  )
}

export default HeroTop
