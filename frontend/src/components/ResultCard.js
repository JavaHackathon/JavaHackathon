import React, { Component } from 'react';
import {connect} from 'react-redux'
import '../styles/App.css';


class ResultCard extends Component {
  render() {
    const result = this.props;
    const isOpen = result.open_now ? 'Open now!' : 'Closed now';
    const priceLevel = ("$" * result.price_level)
    return (
      <div className="result-card card col-md-3">
        {/* <img className="card-img-top" src={result.icon} /> */}
          <h4 className="card-title"><strong>{result.name}</strong></h4>
          <p className="card-text"><em> {result.formatted_address}</em></p>
          <p className="card-text"><em>Rating:</em> {result.rating}</p>
          <p className="card-text"><em>Price range:</em>{priceLevel}</p>
          <p className="card-text">{isOpen}</p>

      </div>

    );
  }
}

const mapStateToProps = function(state) {
  let results = state.results;
  return {results: results}
}

export default connect(mapStateToProps)(ResultCard)
