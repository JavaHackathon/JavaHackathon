import { GET_RESULTS, GET_QUERY } from '../constants'

export const getResults = function (input) {
  return {
    type: GET_RESULTS,
    payload: input
  }
}

export const getQuery = function (payload) {
  return {
    type: GET_QUERY,
    payload: payload
  }
}
