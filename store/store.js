import { createStore, combineReducers } from "redux";
import character from "../pages/character/[character]";
import marvelReducer from "../reducers/marvelReducer";

const store = createStore(marvelReducer);

export default store;
