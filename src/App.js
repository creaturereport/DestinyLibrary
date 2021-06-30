import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from "./components/HomePage";
import PlayerProfile from "./components/PlayerProfile";


function App() {
  return (
    <Router>
      <Switch>
      <Route default exact path="/Homepage"><HomePage /></Route> 
      <Route exact path="/PlayerProfile"><PlayerProfile /></Route>
      </Switch>
    </Router>
  );
}

export default App;

