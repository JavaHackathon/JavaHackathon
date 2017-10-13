import React, { Component } from 'react';
import {connect} from 'react-redux'
import '../styles/App.css';


class ResultCard extends Component {
  render() {
    const result = this.props;
    return (
      <div className="card">
        <img className="card-img-top" src={result.icon} />
          <div className="card-block">
          <h4 className="card-title">{result.name}</h4>
          <p className="card-text">Address: {result.formatted_address}</p>
          <p className="card-text">Type: {result.types}</p>
          <p className="card-text">Rating: {result.rating}</p>
          <p className="card-text">Price range: {result.price_level}</p>
          <p className="card-text">Open now? {result.open_now}</p>
          {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
        </div>
      </div>

    );
  }
}

const mapStateToProps = function(state) {
  let results = state.results;
  return {results: results}
}

export default connect(mapStateToProps)(ResultCard)
