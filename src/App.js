import logo from './logo.svg';
import './index.css';
import Main from './components/Main.js';
import Babyshoot from './components/babyshoots/Babyshoot';
import Wedding from './components/wedding/Wedding';
import Prewedding from './components/prewedding/Prewedding';
import Food from './components/food/Food'; 
import React from "react";
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <Route exact path='/' component={Main}/>
=======
import GalleryRouters from "./components/Main.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Gallery from './components/gallery/Gallery';
function App() {
  return (
  
    // <div className="App">
        
  
    //     <Header/>
     
    //     <Router>
    //     <GalleryRouters/>
    //     </Router>

    //     <About/>
    //     <Contact/>

    //     <footer>
    //       Your copyright message
    //     </footer>
    // </div>
    <Router>
      <Route exact path='/' component={Main}/>
      {/* <Route path='/gallery' component={Gallery}/> */}
>>>>>>> d6f68aa335fc92f176a8d3511b44e29d1ef7b299
      <Route  path="/babyshoots"   component={Babyshoot} />
      <Route  path="/wedding"   component={Wedding} />
      <Route  path="/prewedding"  component={Prewedding} />
      <Route  path="/food"  component={Food} />
    </Router>
  );
}

export default App;
