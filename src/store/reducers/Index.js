import { combineReducers } from "redux";
import LoginReducer from "./login";

const RootReducer = combineReducers({
    login:LoginReducer,
})

export default RootReducer