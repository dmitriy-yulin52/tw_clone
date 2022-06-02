import {call, put, takeEvery} from 'redux-saga/effects'
import {tweetsApi} from "../../../../services/api/tweets";
import {LoadingState} from "./types";
import {FetchTweetDataType, setTweetData, setTweetDataLoadingState, TweetDataActionsType} from "./actions";
import {Tweet} from "../tweets/types";

function* fetchTweetDataRequest({payload:tweet_id}:FetchTweetDataType):any{
    try {
        const data:Tweet[] = yield call(tweetsApi.fetchTweetData,tweet_id)
        yield put(setTweetData(data[0]))
    } catch (e) {
        yield put(setTweetDataLoadingState(LoadingState.ERROR))
    }
}


export function* tweetSaga() {
    yield takeEvery(TweetDataActionsType.FETCH_TWEET_DATA, fetchTweetDataRequest)
}