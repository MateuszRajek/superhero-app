import React from 'react';
import './Powerstats.css';


function Powerstats({ combat, durability, intelligence, speed, strength }) {

  return (
    <div className="hero_powerstats">
      <div className="hero_powerstats_info">
        <i className="fas fa-fist-raised"></i>
        <p>{combat}</p>
      </div>
      <div className="hero_powerstats_info">
        <i className="fas fa-battery-full"></i>
        <p>{durability}</p>
      </div>
      <div className="hero_powerstats_info">
        <i className="fas fa-brain"></i>
        <p>{intelligence}</p>
      </div>
      <div className="hero_powerstats_info">
        <i className="fas fa-tachometer-alt"></i>
        <p>{speed}</p>
      </div>
      <div className="hero_powerstats_info">
        <i className="fas fa-dumbbell"></i>
        <p>{strength}</p>
      </div>
    </div>
  )
}

export default Powerstats;
