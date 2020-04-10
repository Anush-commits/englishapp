import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Home from "./Home"
import Grammar from './Grammar';
import Vocabulary from './Components/Vocabulary';
import Basics from "./Components/Basics"
import BasicReference from './Components/BasicReference';
function App() {
  return (
    
    <Router>
    <div className="App">
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/Grammar" component={Grammar}/>
    <Route exact path="/Vocabulary" component={Vocabulary}/>
    <Route exact path="/Basics" component={Basics}/>
    <Route exact path="/Basics/:id" component={BasicReference} />
  </Switch>
    </div>
    </Router>
  );
}

export default App;
