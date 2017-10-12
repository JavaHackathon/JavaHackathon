import React, { Component } from 'react';
import '../styles/App.css';
import MapContainer from './MapContainer'

import SearchForm from '../components/SearchForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Restaurant Locator (For Now)</h1>
        </header>
      <SearchForm />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <MapContainer />
      </div>
    );
  }
}

export default App;
