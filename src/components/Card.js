import React from 'react'
import './Card.css'
import more from './more.png'
import { Link } from 'react-router-dom'


const Card = (props) =>  {

  return (
      <div className="Card">
          <Link to={'edit/'+ props.id}><img className="moreButton" alt="edit button" src={more} /></Link>
          <h2 className="name">{"Name: " + props.name}</h2>
          <h3 className="color">{"Color: " +props.color}</h3>
          <p className="speed">{"Speed: " +props.speed + " m/hr"}</p>
      </div>
  );
};

export default Card;