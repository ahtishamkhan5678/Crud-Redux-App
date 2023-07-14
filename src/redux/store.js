import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as userReducer } from "./userReducer/reducer";
import { reducer as productReducer } from "./productReducer/reducer";
import thunk from "redux-thunk"

const rootReducer = combineReducers({userReducer, productReducer});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))