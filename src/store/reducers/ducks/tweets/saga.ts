import {call, put, takeLatest} from 'redux-saga/effects'
import {setTweets, setTweetsLoadingState, TweetsActionsType} from "./actions";
import {AxiosResponse} from 'axios'
import {tweetsApi} from "../../../../services/api/tweets";
import {LoadingState, Tweet} from "./types";
import {setTags, setTagsLoadingState, TagsActionsType} from "../tags/actions";
import {tagsApi} from "../../../../services/api/tags";
import {Tag} from "../tags/types";

export function* fetchTweetsRequest(){
    try {
        const data:Tweet[] = yield call(tweetsApi.fetchTweets)
        yield put(setTweets(data))
    } catch (e) {
        yield put(setTweetsLoadingState(LoadingState.ERROR))
    }
}





export function* tweetsSaga() {
    yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)

}