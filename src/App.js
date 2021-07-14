import './index.css';
import Main from './components/Main.js';
import Babyshoot from './components/babyshoots/Babyshoot';
import Wedding from './components/wedding/Wedding';
import Prewedding from './components/prewedding/Prewedding';
import Food from './components/food/Food'; 
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <Route exact path='/' component={Main}/>
      <Route  path="/babyshoots"   component={Babyshoot} />
      <Route  path="/wedding"   component={Wedding} />
      <Route  path="/prewedding"  component={Prewedding} />
      <Route  path="/food"  component={Food} />
    </Router>
  );
}

export default App;
