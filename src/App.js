import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ShowMap from './View/ShowMap/ShowMap'
import Search from './View/Search/Search'
import Home from './View/Home/Home'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/map">
          <ShowMap />
        </Route>
        <Route exact path="/search">
          <Search />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
