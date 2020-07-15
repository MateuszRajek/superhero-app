import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {

  return (
    <footer>
      <p>This app uses <a className="api_link" href="https://www.superheroapi.com" target="_blank">superhero api</a></p>
    </footer>
  )
}

export default Footer;

