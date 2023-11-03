import { combineReducers } from "redux";
import LoginReducer from "./login";
import ProfileReducer from "./profile";

const RootReducer = combineReducers({
    // login: LoginReducer,
    profile: ProfileReducer,
})

export default RootReducer