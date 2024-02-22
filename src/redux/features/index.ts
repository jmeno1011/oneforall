import { combineReducers } from "@reduxjs/toolkit";
import auth from "./auth";
import user from "./user";

const rootReducer = combineReducers({
  auth: auth,
  user: user
});

export default rootReducer;