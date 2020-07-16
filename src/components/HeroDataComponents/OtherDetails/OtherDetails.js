import React from 'react';
import './OtherDetails.css';


function OtherDetails({ firstAppearance, occupation, team, relatives }) {

  return (
    <div className="hero_basic_information">
      <div>
        <h3>team</h3>
        <p>{team === 'null' ? "N/A" : team}</p>
      </div>
      <div>
        <h3>first appearance</h3>
        <p>{firstAppearance === 'null' ? "N/A" : firstAppearance}</p>
      </div>
      <div>
        <h3>occupation</h3>
        <p>{occupation === 'null' ? "N/A" : occupation}</p>
      </div>
      <div>
        <h3>family and relatives</h3>
        <p>{relatives === 'null' ? "N/A" : relatives.split(',').map(person => {
          return <li>{person.trim()}</li>
        })}</p>
      </div>
    </div>
  )
}

export default OtherDetails;
