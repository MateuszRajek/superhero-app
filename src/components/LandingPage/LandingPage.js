import React, { useState } from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';

function LandingPage() {

  const [accessToken, setTokenState] = useState('');

  const onInputChange = event => {
    setTokenState(event.target.value)
  }

  const pushAccesTokenToSessionStorage = () => {
    sessionStorage.setItem('accesToken', accessToken)
  }

  return (
    <section className="landing_page">
      <p className="app_welcome">This superheroes app gets the content from <a href="https://superheroapi.com" target="_blank" rel="noopener noreferrer">'https://superheroapi.com'</a> To prevent unauthorised users it requires personal acces token</p>
      <form className="acces_token_form" >
        <h2 className="type_acces_token_label" forhtml="type_acces_token_input">Please provide your acces token here: </h2>
        <div className="wrapper">
          <input onChange={onInputChange} className="type_acces_token" type="text" name="accesToken"></input>
          <Link to={accessToken.length > 10 ? `/home` : `/`}><button onClick={pushAccesTokenToSessionStorage} label={'accesTokenBtn'}>Submit</button> </Link>
        </div>
      </form>
    </section>
  )
}

export default LandingPage;
