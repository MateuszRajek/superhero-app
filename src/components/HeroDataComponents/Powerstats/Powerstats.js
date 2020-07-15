import React from 'react';
import './Powerstats.css';


function Powerstats({ combat, durability, intelligence, speed, strength }) {

  return (
    <div className="hero_powerstats">
      <div className="hero_powerstats_info">
        <i className="fas fa-fist-raised" />
        <p>{combat}</p>
      </div>
      <div className="hero_powerstats_info">
        <i className="fas fa-battery-full" />
        <p>{durability}</p>
      </div>
      <div className="hero_powerstats_info">
        <i className="fas fa-brain" />
        <p>{intelligence}</p>
      </div>
      <div className="hero_powerstats_info">
        <i className="fas fa-tachometer-alt" />
        <p>{speed}</p>
      </div>
      <div className="hero_powerstats_info">
        <i className="fas fa-dumbbell" />
        <p>{strength}</p>
      </div>
    </div>
  )
}

export default Powerstats;
