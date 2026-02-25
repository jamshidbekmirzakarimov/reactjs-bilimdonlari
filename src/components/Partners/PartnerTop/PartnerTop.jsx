import React from 'react'
import MainImg from '../../../assets/mainImg.png'
import './PartnerTop.css'

const PartnerTop = () => {
  return (
    <div className='partner-body'>
        <div className="titles">
                  <h1 className='partner-title' >Don't take our word for it.</h1>
      <h2 className='partner-title' >Take theirs...</h2>
        </div>
        <div className="main-card">
            <div className="main-img-box">
            <img className='main-card-img' src={MainImg} alt="main Img" />
            </div>
            <div className="card-titles">
                <p className='paragrph-main-card'>Tanya Singer</p>
                <h6 className='h6-main-card' >Designer or Digital marketing</h6>
                <h2 className='text-main-card'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
            </div>
        </div>



    </div>
  )
}

export default PartnerTop
