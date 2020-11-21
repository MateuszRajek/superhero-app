import React, { useState } from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function LandingPage() {
  const [accessToken, setAccessToken] = useState('');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const pushaccessTokenToSessionStorage = () => {
    sessionStorage.setItem('accessToken', accessToken);
  }
  
  const onInputChange = event => {
    setAccessToken(event.target.value);
    pushaccessTokenToSessionStorage()
  }

  useEffect(() => {
    pushaccessTokenToSessionStorage()
  }, [accessToken, pushaccessTokenToSessionStorage])

  return (
    <section className="landing_page">
      <p className="app_welcome">This superheroes app gets the content from <a href="https://superheroapi.com" target="_blank" rel="noopener noreferrer">'https://superheroapi.com'</a> To prevent unauthorised users it requires personal acces token</p>
      <form className="acces_token_form" >
        <h2 className="type_acces_token_label" forhtml="type_acces_token_input">Please provide your acces token here: </h2>
        <div className="wrapper">
          <input onChange={onInputChange} className="type_acces_token" type="text" name="accessToken"></input>
          <Link to={accessToken.length > 10 ? `/main/` : `/`}><button label={'accessTokenBtn'} >Submit</button> </Link>
        </div>
      </form>
    </section>
  )
}

export default LandingPage;
