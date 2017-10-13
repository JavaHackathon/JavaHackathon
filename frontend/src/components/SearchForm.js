import React, { Component } from 'react';
import '../styles/App.css';
import {connect} from 'react-redux';
import {getResults, getQuery } from '../store/actions/index';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { checkbox, textfield, button } from 'material-components-web';

class SearchForm extends Component {
  constructor(props){
    super(props)
  } 

  _handleChange = (evt) => {
    let inputName = evt.target.name
    this.setState({
      [inputName] : evt.target.value
    })
  }

  render() {
    console.log(this.props)
    console.log(this.props.getQuery())
    console.log('this is the state on the SearchForm', this.state)
    return (
      <form onSubmit={this.props.getQuery(this.state)}className="search">
        <h1 className="typewriter mx-auto">Search for restaurants near you!</h1>
        <div className="mdc-form-field">
          <div className="mdc-textfield">
            <label htmlFor="location" className="mdc-textfield__label">
            Location
            </label>
            <input name="location" type="text" onChange={this._handleChange} className="mdc-textfield__input" placeholder="e.g. New York"/>
          </div>
          <div className="mdc-textfield">
            <label htmlFor="type" className="mdc-textfield__label">
            Type of Restaurant
            </label>
            <select name="type" onChange={this._handleChange}>
              <option value="">Search for...</option>
              <option value="bar">Bars</option>
              <option value="restaurant">Restaurants</option>
              <option value="cafe">Cafes</option>
            </select>
          </div>
          <button><Link to={`/Results`}>Search!</Link></button>
        </div>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {results: state.results}
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getResults: getResults, 
    getQuery: getQuery
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
