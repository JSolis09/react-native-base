import { combineReducers } from "redux";
import HomeContainerReducer from "../containers/HomeContainer/reducer";
import LoginContainerReducer from "../containers/LoginContainer/reducer";

export default combineReducers({
  home: HomeContainerReducer,
  auth: LoginContainerReducer
});
