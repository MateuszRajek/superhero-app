import React from 'react';
import './Appearance.css';

function Appearance({ gender, race, height, weight }) {

  return (
    <div className="hero_appearance">
      <div className="hero_appearance_info">
        <i className="fas fa-venus-mars" />
        <p>{gender === 'null' ? "N/A" : gender}</p>
      </div>
      <div className="hero_appearance_info">
        <i className="fas fa-flag-usa" />
        <p>{race === 'null' ? "N/A" : race}</p>
      </div>
      <div className="hero_appearance_info">
        <i className="fas fa-ruler-vertical" />
        <p>{height[1] === 'null' ? "N/A" : height[1]}</p>
      </div>
      <div className="hero_appearance_info">
        <i className="fas fa-balance-scale" />
        <p>{weight[1] === 'null' ? "N/A" : weight[1]}</p>
      </div>
    </div >
  )
}

export default Appearance;
