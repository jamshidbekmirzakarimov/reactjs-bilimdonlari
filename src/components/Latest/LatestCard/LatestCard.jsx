import React from 'react'
import "./LatestCard.css"

const LatestCard = () => {
  return (
      <div className="Latest">
        <div className="LatestCard">
            <div className="card-img-lates">
                <img className="lates-img" src={'https://media.istockphoto.com/id/517374252/photo/business-office-building-in-london-england.jpg?s=612x612&w=0&k=20&c=mC7RfqWnNBEkmfbem-cHjd7O10XbiZ0SCfJuIZkmfKg='} alt="Latest Card1" />
            </div>
            <div className="card-title-lates">
                <h1 className="lates-card-title">Latest Card 1</h1>
                <p className="lates-card-text">Latest Card 1</p>
                <h4 className="lates-card-text2">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</h4>
            </div>
            <div className="card-button-lates">
                <button className="button-last">More</button>
            </div>
        </div>
      </div>
  )
}

export default LatestCard
