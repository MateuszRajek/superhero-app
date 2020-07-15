import React from 'react';
import './Loader.css';


function Loader({ combat, durability, intelligence, speed, strength }) {

  return (
    <div className="loader_container">
      <div className="right_hand_side_spinner"></div>
      <div className="left_hand_side_spinner"></div>
    </div>
  )
}

export default Loader;
