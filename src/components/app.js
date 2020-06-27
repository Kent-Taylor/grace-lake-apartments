import React, { Component } from 'react';
import Navigation from './navigation';
import Home from './home';
import Footer from './footer';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Navigation />
        <Home />
        <Footer />
      </div>
    );
  }
}
