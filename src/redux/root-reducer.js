import { combineReducers } from "redux";
import directoryReducer from "./directory/directory.reducer";
import problemReducer from "./problems/problems.reducer";

const allReducers = combineReducers({
  directory: directoryReducer,
  problems: problemReducer,
});

export default allReducers;
