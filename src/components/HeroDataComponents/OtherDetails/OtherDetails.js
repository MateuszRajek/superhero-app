import React from 'react';
import './OtherDetails.css';


function OtherDetails({ firstAppearance, occupation, team, relatives }) {

  return (
    <div className="hero_basic_information">
      <div>
        <h3>team</h3>
        <p>{team}</p>
      </div>
      <div>
        <h3>first appearance</h3>
        <p>{firstAppearance}</p>
      </div>
      <div>
        <h3>occupation</h3>
        <p>{occupation}</p>
      </div>
      <div>
        <h3>family and relatives</h3>
        <p>{relatives}</p>
      </div>
    </div>
  )
}

export default OtherDetails;
