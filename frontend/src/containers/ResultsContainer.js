import React, { Component } from 'react';
import {connect} from 'react-redux'
import '../styles/App.css';
import {getResults, getQuery } from '../store/actions/index';
import { bindActionCreators } from 'redux';

import ResultCard from '../components/ResultCard';


class ResultsContainer extends Component {
  render() {

    console.log('props peops here', this.props.results)
    const results = this.props.results;
    console.log('these are the results ', results)
    let searchQuery = this.props.searchQuery;
    // let location = this.props.searchQuery.location;
    // let type = this.props.searchQuery.type;
    getResults(searchQuery)
    return (
      <div className="results text-center mx-auto">
        <h1 className="display-3">Results</h1>
        <div className="row mx-auto d-flex justify-content-around">
        {results.map((result) => {
          return (
            <ResultCard
              key={result.id}
              {...result}
            />
          )
        })}
      </div>
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  console.log('mappin state', state)
  let results = state.results;
  let searchQuery = state.searchQuery
  return {results: results, searchQuery: searchQuery}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getResults: getResults,
    getQuery: getQuery
  }, dispatch)
}


//fetch the results and update state with the results
//map over results to plug in to results cards (already written)

export default connect(mapStateToProps, mapDispatchToProps)(ResultsContainer)
