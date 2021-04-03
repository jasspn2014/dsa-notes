import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import allReducers from "./root-reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [thunk];

const store = createStore(
  allReducers,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
