import {takeEvery} from 'redux-saga/effects'
import {TweetsActionsType} from "./actions";





export function* fetchTweetsRequest(){
    console.log('incrementAsync1')
}


export function* tweetsSaga(){
    yield takeEvery(TweetsActionsType.FETCH_TWEETS,fetchTweetsRequest)
}