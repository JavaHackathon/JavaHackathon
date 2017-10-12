import React, { Component } from 'react';
import '../styles/App.css';
import {connect} from 'react-redux';
import {getResults} from '../actions/';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { checkbox, textfield, button } from 'material-components-web';

class SearchForm extends Component {
  render() {
    return (
      <form action="POST" className="search">
        <h1 className="mdc-typography--display2">Search for restaurants near you</h1>
        <div className="mdc-form-field">
          <div className="mdc-textfield">
            <label for="location" class="mdc-textfield__label">
            Location
            </label>
            <input id="location" type="text" class="mdc-textfield__input" placeholder="e.g. New York"/>
          </div>
          <div className="mdc-textfield">
            <label for="type" class="mdc-textfield__label">
            Type of Restaurant
            </label>
            <input id="type" type="text" class="mdc-textfield__input" placeholder="e.g. Polish"/>
          </div>
          <button type="submit"
            class="mdc-button
                   mdc-button--raised
                   mdc-ripple-surface"
            data-mdc-auto-init="MDCRipple">
              Search!
          </button>
        </div>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getResults: getResults
  }, dispatch)
}

export default connect(mapDispatchToProps)(SearchForm);
