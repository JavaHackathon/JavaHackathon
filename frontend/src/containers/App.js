import React, { Component } from 'react';
import '../styles/App.css';
// import MapContainer from './MapContainer'

import SearchForm from '../components/SearchForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Restaurant Locator (For Now)</h1>
        </header>
        <SearchForm 
          
        />
      </div>
    );
  }
}

export default App;
