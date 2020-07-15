import React from 'react';
import './Biography.css';


function Biography({ fullName, alterEgos, placeOfBirth }) {

  return (
    <div className="hero_biography">
      <div className="hero_biography_info">
        <h3>full name: </h3>
        <p>{fullName}</p>
      </div>
      <div className="hero_biography_info">
        <h3>alter egos: </h3>
        <p>{alterEgos}</p>
      </div>
      <div className="hero_biography_info">
        <h3>place of birth: </h3>
        <p>{placeOfBirth}</p>
      </div>
    </div>
  )
}

export default Biography;
