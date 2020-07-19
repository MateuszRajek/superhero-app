import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';
import Powerstats from '../HeroDataComponents/Powerstats/Powerstats';

function Hero({ id, name, imageUrl, hero }) {

  return (
    <>
      <h2 className="hero_name">{name}</h2>
      <div className="hero_img_container">
        <Link to={`/hero/${id}`}><img className="hero_img" src={imageUrl} alt="" /></Link>
      </div>
      <Powerstats combat={hero.powerstats.combat} durability={hero.powerstats.durability} intelligence={hero.powerstats.intelligence}
        speed={hero.powerstats.speed} strength={hero.powerstats.strength} />
    </>
  )
}

export default Hero;
