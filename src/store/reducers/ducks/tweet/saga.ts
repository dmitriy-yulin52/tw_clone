import {call, put, takeLatest} from 'redux-saga/effects'
import {tweetsApi} from "../../../../services/api/tweets";
import {LoadingState} from "./types";

function* fetchTweetDataRequest(){
    try {
        // const data:Tweet = yield call(tweetsApi.fetchTweets)
        // yield put(setTweets(data))
    } catch (e) {
        // yield put(setTweetsLoadingState(LoadingState.ERROR))
    }
}





export function* tweetsSaga() {
    // yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetDataRequest)

}