import { combineReducers } from "redux";
import { CounterReducer } from "../reducer/CounterReducer";

const rootReducer = combineReducers({
    counter: CounterReducer
})

export default rootReducer