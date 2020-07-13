import React from 'react';
import './Nav.css';
import logo from '../../assets/logo/logo.png'
import { Link } from 'react-router-dom';

export let searchingHeroName = ''

class Nav extends React.Component {
  constructor() {
    super();

    this.state = {
      heroNameFromInput: '',
      // heroesList: []
    }
  }

  onInputChange = event => {
    const inputValue = event.target.value;
    this.setState({ heroNameFromInput: inputValue })
  }

  getAndPushHeroNameToVariable = event => {
    searchingHeroName = this.state.heroNameFromInput;
    this.setState({ heroNameFromInput: "" })
  }

  render() {

    return (
      <nav className="main_nav">
        <div className="logo_image_container">
          <Link to="/"><img className="logo" src={logo} alt="logo" /></Link>
        </div>
        <form className="search_hero" >
          <label className="type_hero_name_label" forhtml="type_hero_name_input">Enter the name of your favourite hero: </label>
          <input onChange={this.onInputChange} value={this.state.heroNameFromInput} className="type_hero_name" type="text" min="1" max="731" name="heroName"></input>
          <Link to={`/search/${this.state.heroNameFromInput}`}><button onClick={() => { this.getAndPushHeroNameToVariable() }} label={'add hero'}>find hero</button> </Link>
        </form>
      </nav >

    )
  }

}


export default Nav;

