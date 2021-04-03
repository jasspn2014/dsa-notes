import ProblemActionTypes from "./problems.types";

const INITIAL_STATE = {
  isFetching: false,
  problems: null,
  errorMessage: undefined,
};

const problemsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProblemActionTypes.FETCH_PROBLEMS_START:
      return {
        ...state,
        isFetching: true,
      };
    case ProblemActionTypes.FETCH_PROBLEMS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        problems: action.payload,
      };
    case ProblemActionTypes.FETCH_PROBLEMS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default problemsReducer;