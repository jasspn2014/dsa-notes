import ProblemActionTypes from "./problems.types";

export const fetchProblemsStart = () => ({
  type: ProblemActionTypes.FETCH_PROBLEMS_START,
});

export const fetchProblemsSuccess = (problemsMap) => ({
  type: ProblemActionTypes.FETCH_PROBLEMS_START,
  payload: problemsMap,
});

export const fetchProblemsFailure = (errorMessage) => ({
  type: ProblemActionTypes.FETCH_PROBLEMS_FAILURE,
  payload: errorMessage,
});
