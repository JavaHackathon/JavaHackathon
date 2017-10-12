import React, { Component } from 'react';
import '../styles/App.css';
// import MapContainer from './MapContainer'

import SearchForm from '../components/SearchForm';

class App extends Component {
  render() {
    return (
      <div className="landing-page">
      <div className="jumbotron text-center make-transparent">
        <h1 className="display-3">Troll your City!</h1>
        <p className="lead">Find out about places in your area!</p>
        <SearchForm/>
      </div>
      </div>
    );
  }
}

export default App;
