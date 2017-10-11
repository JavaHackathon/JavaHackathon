import React, { Component } from 'react';
import '../styles/App.css';
import {connect} from 'react-redux';
import {getResults} from '../actions/';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

class SearchForm extends Component {
  render() {
    return (
      <div className="search">
        {/* form goes here */}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getResults: getResults
  }, dispatch)
}

export default connect(mapDispatchToProps)(SearchForm);
