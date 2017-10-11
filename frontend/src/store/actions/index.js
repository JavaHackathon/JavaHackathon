import { GET_RESULTS } from '../constants';

export function getResults(input) {
  return {
    type: GET_RESULTS,
    payload: input
  }
}
