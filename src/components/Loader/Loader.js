import React from 'react';
import './Loader.css';


function Loader({ combat, durability, intelligence, speed, strength }) {

  return (
    <div class="loader_container">
      <div class="right_hand_side_spinner"></div>
      <div class="left_hand_side_spinner"></div>
    </div>
  )
}

export default Loader;
