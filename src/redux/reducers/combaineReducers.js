import { combineReducers } from "redux";
import accountReducer from "./accountReducer";
import kucingReducer from "./kucingReducer";

const reducers = combineReducers({
    account: accountReducer,
    kucing : kucingReducer
});

export default reducers;