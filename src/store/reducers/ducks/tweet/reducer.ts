import {LoadingState, TweetDataState} from "./types";
import produce, {Draft} from "immer";
import {TweetDataActions, TweetDataActionsType} from "./actions";
import {Tweet} from "../tweets/types";


const initialTweetDataState: TweetDataState = {
    data: null,
    loadingState: LoadingState.NEVER
}


export const tweetReducer = produce((draft: Draft<TweetDataState>, action: TweetDataActions) => {


    switch (action.type) {
        case TweetDataActionsType.SET_LOADING_STATE:
            draft.loadingState = action.payload
            break
        case TweetDataActionsType.SET_TWEET_DATA:
            draft.data = action.payload
            draft.loadingState = LoadingState.LOADED
            break
        case TweetDataActionsType.FETCH_TWEET_DATA:
            // draft.data = []
            draft.loadingState = LoadingState.LOADING
            break
        default:
            break
    }

}, initialTweetDataState)