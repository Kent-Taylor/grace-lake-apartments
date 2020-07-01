import React, { Component } from 'react';
import Home from './home';
import FloorPlans from './FloorPlans';
import Map from './Map';
import Photos from "./Photos";
import Contact from './Contact';

import { BrowserRouter, Switch, Route } from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/floorplans" component={FloorPlans} />
            <Route path="/map" component={Map} />
            <Route path="/photos" component={Photos} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
