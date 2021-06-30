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
    <div> 
      hello from app.js
    <Router>
      <Switch>
         
        <Route exact path="/homepage">
          <HomePage />
        </Route> 
          
        <Route exact path="/playerprofile">
          <PlayerProfile />
        </Route>
       
      </Switch>
    </Router>
    </div>
  );
}

export default App;

