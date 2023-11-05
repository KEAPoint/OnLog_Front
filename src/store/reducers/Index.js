import { combineReducers } from "redux";
import LoginReducer from "./login";
import ProfileReducer from "./profile";
import ColorReducer from "./color";

const RootReducer = combineReducers({
    // login: LoginReducer,
    profile: ProfileReducer,
    color: ColorReducer,
})

export default RootReducer