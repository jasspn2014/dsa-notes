import ProblemActionTypes from "./problems.types";
import { db, convertCollectionsSnapshotToMap } from "../../firebase";

export const fetchProblemsStart = () => ({
  type: ProblemActionTypes.FETCH_PROBLEMS_START,
});

export const fetchProblemsSuccess = (problemsMap) => ({
  type: ProblemActionTypes.FETCH_PROBLEMS_SUCCESS,
  payload: problemsMap,
});

export const fetchProblemsFailure = (errorMessage) => ({
  type: ProblemActionTypes.FETCH_PROBLEMS_FAILURE,
  payload: errorMessage,
});

const fetchProblemsStartAsync = () => {
  return (dispatch) => {
    const problemsRef = db.collection("problems");
    dispatch(fetchProblemsStart());

    problemsRef
      .get()
      .then((snapshot) => {
        const problemsMap = convertCollectionsSnapshotToMap(snapshot);
        console.log(problemsMap);
        dispatch(fetchProblemsSuccess(problemsMap));
      })
      .catch((error) => dispatch(fetchProblemsFailure(error.message)));
  };
};

export default fetchProblemsStartAsync;
