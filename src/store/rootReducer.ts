import {combineReducers} from "redux";
import {tweetsReducer} from "./reducers/ducks/tweets/reducer";
import {tagsReducer} from "./reducers/ducks/tags/reducer";
import {usersReducer} from "./reducers/ducks/users/reducer";
import {tweetReducer} from "./reducers/ducks/tweet/reducer";


export const rootReducer = combineReducers({
    tweets:tweetsReducer,
    tags:tagsReducer,
    users:usersReducer,
    tweet:tweetReducer
})