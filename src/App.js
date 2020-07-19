import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FeaturedHeroes from './components/FeaturedHeroes/FeaturedHeroes';
import SearchHeroView from './components/SearchHeroView/SearchHeroView'
import HeroDetailsView from './components/HeroDetailsView/HeroDetailsView';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import LandingPage from './components/LandingPage/LandingPage';


function App() {

  return (
    <>
      <Router>
        <Nav />
        <main>
          <div className="container">
            <Switch>
              <Route exact path="/">
                <LandingPage />
              </Route>
              <Route path="/home" >
                <FeaturedHeroes />
              </Route>
              <Route path="/search/:name">
                <SearchHeroView />
              </Route>
              <Route path="/hero/:id">
                <HeroDetailsView />
              </Route>
            </Switch>
          </div>
        </main>
        <Footer />
      </Router>
    </>
  )
}

export default App;
