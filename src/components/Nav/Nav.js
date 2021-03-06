import React, { useState } from 'react';
import './Nav.css';
import logo from '../../assets/logo/logo.png'
import { Link } from 'react-router-dom';

function Nav() {
  const [heroNameFromInput, setheroNameState] = useState('');

  const onInputChange = event => {
    setheroNameState(event.target.value);
      }

  const clearState = () => {
    if (heroNameFromInput === '') {
      alert('PLEASE ENTER HERO NAME');
      return
    }
    setheroNameState('');
  }

  return (
    <nav className="main_nav">
      <div className="logo_title_wrapper ">
        <div className="logo_image_container">
          <Link to="/main/"><img className="logo" src={logo} alt="logo" /></Link>
        </div>
        <h1 className="app_title">superheroes app</h1>
      </div>
      <form className="search_hero" >
        <div className="wrapper">
          <label className="type_hero_name_label" forhtml="type_hero_name_input">Enter the name of your favourite hero: </label>
          <input onChange={onInputChange} value={heroNameFromInput} className="type_hero_name" type="text" name="heroName"></input>
        </div>
        <Link to={heroNameFromInput.length > 3 ? `/search/${heroNameFromInput}` : `/`}><button onClick={() => { clearState() }} label={'add hero'}>find hero</button> </Link>
      </form>
    </nav >
  )
}

export default Nav;

