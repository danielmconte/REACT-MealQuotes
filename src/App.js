import React from 'react';
import Home from './Home';
import Cereal from './Cereal';
import Muffin from './Muffin';
import LeftoverPizza from './LeftoverPizza';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path = "/pizza">
          <LeftoverPizza/>
        </Route>   
        <Route exact path = "/muffin">
          <Muffin/>
        </Route> 
        <Route exact path = "/cereal">
          <Cereal/>
        </Route>  
        <Route exact path = "/">
          <Home/>
        </Route>    
      </BrowserRouter>
    </div>
  );
}

export default App;
