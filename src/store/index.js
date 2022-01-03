import {createStore,combineReducers,applyMiddleware} from "redux"
import logger from "redux-logger";
import thunk from "redux-thunk";

import VisitedReducer from "./visited/visitedReducer";

const rootReducer = combineReducers({
    visited:VisitedReducer
})

const store = createStore(rootReducer,applyMiddleware(thunk));

export default store