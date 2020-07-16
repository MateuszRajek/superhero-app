import React from 'react';
import './Biography.css';


function Biography({ fullName, alterEgos, placeOfBirth }) {

  return (
    <div className="hero_biography">
      <div className="hero_biography_info">
        <h3>full name: </h3>
        <p>{fullName === 'null' ? "N/A" : fullName}</p>
      </div>
      <div className="hero_biography_info">
        <h3>alter egos: </h3>
        <p>{alterEgos === 'null' ? "N/A" : alterEgos}</p>
      </div>
      <div className="hero_biography_info">
        <h3>place of birth: </h3>
        <p>{placeOfBirth === 'null' ? "N/A" : placeOfBirth}</p>
      </div>
    </div>
  )
}

export default Biography;
