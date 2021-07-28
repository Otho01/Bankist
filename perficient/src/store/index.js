import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const appReducer = combineReducers({});

const middlewares = applyMiddleware(thunk);

export const store = createStore(rootReducer, middlewares);
