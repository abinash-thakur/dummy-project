import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducer";
import logger from "redux-logger";

const middleWare = applyMiddleware(logger);

const store = createStore(rootReducer, middleWare);

export default store;