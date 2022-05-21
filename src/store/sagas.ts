import {all} from "redux-saga/effects";
import {tweetsSaga} from "./reducers/ducks/tweets/saga";

export default function* rootSaga() {
    yield all([
        tweetsSaga()
    ])
}