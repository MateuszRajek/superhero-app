import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FeaturedHeroes from './components/FeaturedHeroes/FeaturedHeroes';
import SearchHeroView from './components/SearchHeroView/SearchHeroView'
import Nav from './components/Nav/Nav';

function App() {


  return (
    <Router>
      <main>
        <div className="container">
          <Nav />
          <Switch>
            <Route exact path="/">
              <FeaturedHeroes />
            </Route>
            <Route path="/search/:name">
              <SearchHeroView />
            </Route>
            {/* <Route path="/hero/:id">
              <HeroDetailsView />
            </Route> */}
          </Switch>
        </div>
      </main>
    </Router>


  )
}

export default App;
