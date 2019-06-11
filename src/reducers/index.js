import MenuReducer from "./reducer_menu";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  menu: MenuReducer
});

export default rootReducer;
