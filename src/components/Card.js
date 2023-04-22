import React from 'react'
import './Card.css'
import more from './more.png'
import { Link } from 'react-router-dom'



const Card = (props) =>  {

  return (
      <div className="Card">
          <Link to={'edit/'+ props.id}><img className="moreButton" alt="edit button" src={more} /></Link>
          <h2 className="name">{props.name}</h2>
          <p className="created">{props.created_at.substring(0, props.created_at.indexOf('T'))}</p>
          <p className="post">{props.post}</p>
          <img src={props.picture} width="200" height="200"></img>
      </div>
  );
};

export default Card;