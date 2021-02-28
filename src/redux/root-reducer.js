import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";

export default combineReducers({
  //all states related to user
  user: userReducer,
});
