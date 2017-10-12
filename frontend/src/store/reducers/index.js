import {combineReducers} from 'redux';
import {GET_RESULTS} from '../actions/';
import update from 'immutability-helper';

const initialState = {
  results: []
}

const reducer = function(state = initialState, action) {
  switch (action.type) {
    case GET_RESULTS:
    //need to replace this with the function to get results from api
      return state
    // return update(state, {results: {$set: results
    // }

    default:
      return state;
  }
}

export default reducer;
