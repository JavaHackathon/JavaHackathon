import { GET_RESULTS, GET_QUERY } from '../constants'

export const getResults = function (query) {
  return {
    type: GET_RESULTS,
    payload: query
  }
}

export const getQuery = function (payload) {
  return {
    type: GET_QUERY,
    payload: payload
  }
}
