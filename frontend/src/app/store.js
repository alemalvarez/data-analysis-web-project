import { configureStore } from "@reduxjs/toolkit";
import {combineReducers} from 'redux';

const SET_FIELDS = "SET_FIELDS";
const SET_SALES = "SET_SALES";

const fieldsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_FIELDS:
      return action.fields;
    default:
      return state;
  }
};

const SalesReducer = (state = [], action) => {
  switch (action.type) {
    case SET_SALES:
      return action.sales;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  fields:fieldsReducer,
  sales:SalesReducer
})

export const store = configureStore({
  reducer: rootReducer
});
