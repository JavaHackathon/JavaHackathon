import {combineReducers} from 'redux';
import {GET_RESULTS, GET_QUERY} from '../constants';
import {getResults, getQuery} from '../actions/'
import update from 'immutability-helper';
import axios from 'axios';
import data from '../../data/data'

const initialState = {
  results: data.results,
  searchQuery: ""
}

const reducer = function(state = initialState, action) {
  switch (action.type) {
    case GET_QUERY:
      console.log('testing for state here >>> ', state);
      return update(state, {
        searchQuery: {
          $set: action.payload
        }
      })

    case GET_RESULTS:
      console.log(state)
      const location = state.searchQuery.location;
      const type = state.searchQuery.type;
      let url = `https://maps.googleapis.com/maps/api/place/textsearch/xml?query=${action.payload}&key=AIzaSyCwjWWNj0dGJsoYs91DvxGRXOnDahowTUg`
      console.log('this is the url ', url)
      axios.get(url).then(function(results) {
        console.log('this is the results that should come back from our fetch: >>>>', results)
        return update(state, {
          results: {
            $set: results
          }
        })
      })

    default:
      return state;
}}

      export default reducer;
