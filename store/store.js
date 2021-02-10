import { createStore, combineReducers } from "redux";
import character from "../pages/character/[character]";
import characterReducer from "../reducers/characterReducer";

const store = createStore(characterReducer);

export default store;
