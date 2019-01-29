import { combineReducers } from "redux";
import HomeContainerReducer from "../containers/HomeContainer/reducer";

export default combineReducers({
  home: HomeContainerReducer
});
