import {all} from "redux-saga/effects";
import {tweetsSaga} from "./reducers/ducks/tweets/saga";
import {tagsSaga} from "./reducers/ducks/tags/saga";
import {usersSaga} from "./reducers/ducks/users/saga";
import {tweetSaga} from "./reducers/ducks/tweet/saga";

export default function* rootSaga() {
    yield all([
        tweetsSaga(),
        usersSaga(),
        tagsSaga(),
        tweetSaga()
    ])
}