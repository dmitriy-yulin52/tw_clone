import {combineReducers} from "redux";
import {tweetsReducer} from "./reducers/ducks/tweets/reducer";
import {tagsReducer} from "./reducers/ducks/tags/reducer";




export const rootReducer = combineReducers({
    tweets:tweetsReducer,
    tags:tagsReducer
})