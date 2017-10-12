import { combineReducers } from 'redux';
import { GET_RESULTS, GET_QUERY } from '../constants';
import { getResults, getQuery } from '../actions/'
import update from 'immutability-helper';
import axios from 'axios';
import data from '../../data/data'
// import { data } from '../../data/data'

const initialState = {
  results: data.results,
  location: "",
  type: "",
  searchQuery: ""
}

const reducer = function(state = initialState, action) {
  switch (action.type) {

        case GET_QUERY:
        getQuery(action.payload);
        console.log('testin it ', state);
        return state;
//     case GET_RESULTS:
//     console.log(state)
//     //added
//       let url = 'https://maps.googleapis.com/maps/api/place/textsearch/xml?query=restaurants+in+Sydney&key=AIzaSyCwjWWNj0dGJsoYs91DvxGRXOnDahowTUg'
//       axios.get(url).then(function(results) {
//         console.log('this is the results that should come back from our fetch: >>>>', results)
//         return update(state, {results: {$set: results
//     }})
// })
      default:
      console.log(state)
      return state;
  }
}

export default reducer;
