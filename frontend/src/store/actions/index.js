export const GET_RESULTS = "GET_RESULTS";

export const getResults = function (input) {
  return {
    type: GET_RESULTS,
    payload: input
  }
}

