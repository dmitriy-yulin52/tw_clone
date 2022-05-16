import {combineReducers} from "redux";
import {tweetsReducer} from "./reducers/ducks/tweets/reducer";




export const rootReducer = combineReducers({
    tweets:tweetsReducer
})