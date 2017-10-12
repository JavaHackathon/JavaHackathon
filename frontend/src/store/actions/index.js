export const GET_RESULTS = "GET_RESULTS";

export function getResults(input) {
  return {
    type: GET_RESULTS,
    payload: input
  }
}
