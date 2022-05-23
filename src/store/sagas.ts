import {all} from "redux-saga/effects";
import {tweetsSaga} from "./reducers/ducks/tweets/saga";
import {tagsSaga} from "./reducers/ducks/tags/saga";

export default function* rootSaga() {
    yield all([
        tweetsSaga(),
        tagsSaga()
    ])
}