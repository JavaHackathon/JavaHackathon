import React, { Component } from 'react';
import {connect} from 'react-redux'
import '../styles/App.css';

import ResultCard from '../components/ResultCard';


class ResultsContainer extends Component {
  render() {
    const {results} = this.props;
    return (
      <div className="results">
        {results.map((result) => {
          return (
            <ResultCard
              key={result.id}
              {...result}
            />
          )
        })}

      </div>
    );
  }
}

const mapStateToProps = function(state) {
  console.log('mappin state', state)
  let results = state.results;
  return {results: results}
}

export default connect(mapStateToProps)(ResultsContainer)
