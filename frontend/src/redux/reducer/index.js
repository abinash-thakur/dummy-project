import { combineReducers } from "redux";
import counterReducer from "./getInfo";

const rootReducer = combineReducers({
    counterReducer
});

export default rootReducer;