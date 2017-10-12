import React, { Component } from 'react';
import '../styles/App.css';
import {connect} from 'react-redux';
import {getResults} from '../store/actions/index';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { checkbox, textfield, button } from 'material-components-web';

class SearchForm extends Component {
  constructor(props){
    super(props)
  }
  render() {
    console.log(this.props)
    console.log(this.props.getResults())
    console.log('this is the state on the SearchForm', this.state)
    return (
      <form className="search">
        <h1 className="typewriter mx-auto">Search for restaurants near you!</h1>
        <div className="mdc-form-field">
          <div className="mdc-textfield">
            <label htmlFor="location" className="mdc-textfield__label">
            Location
            </label>
            <input id="location" type="text" className="mdc-textfield__input" placeholder="e.g. New York"/>
          </div>
          <div className="mdc-textfield">
            <label htmlFor="type" className="mdc-textfield__label">
            Type of Restaurant
            </label>
            <input id="type" type="text" className="mdc-textfield__input" placeholder="e.g. Polish"/>
          </div>
          <button onClick={ () => this.props.getResults()}>Search!</button>
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
    getResults: getResults
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
