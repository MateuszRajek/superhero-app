import React from 'react';
import './Powerstats.css';


function Powerstats({ combat, durability, intelligence, speed, strength }) {

  return (
    <div className="hero_powerstats">
      <div className="hero_powerstats_info">
        <i className="fas fa-fist-raised" />
        <p>{combat === 'null' ? "N/A" : combat}</p>
      </div>
      <div className="hero_powerstats_info">
        <i className="fas fa-battery-full" />
        <p>{durability === 'null' ? "N/A" : durability}</p>
      </div>
      <div className="hero_powerstats_info">
        <i className="fas fa-brain" />
        <p>{intelligence === 'null' ? "N/A" : intelligence}</p>
      </div>
      <div className="hero_powerstats_info">
        <i className="fas fa-tachometer-alt" />
        <p>{speed === 'null' ? "N/A" : speed}</p>
      </div>
      <div className="hero_powerstats_info">
        <i className="fas fa-dumbbell" />
        <p>{strength === 'null' ? "N/A" : strength}</p>
      </div>
    </div>
  )
}

export default Powerstats;
