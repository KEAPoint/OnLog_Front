import { combineReducers } from "redux";
import LoginReducer from "./login";
import ProfileReducer from "./profile";
import ColorReducer from "./color";
import CardReducer from "./card";

const RootReducer = combineReducers({
    // login: LoginReducer,
    profile: ProfileReducer,
    color: ColorReducer,
    cards: CardReducer,
})

export default RootReducer