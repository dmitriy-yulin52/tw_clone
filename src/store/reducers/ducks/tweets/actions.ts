import {Action} from 'redux'
import {TweetsState} from "./types";


export enum TweetsActionsType {
    SET_TWEETS = 'tweets/SET_TWEETS',
    FETCH_TWEETS = 'tweets/FETCH_TWEETS'
}

export type TweetsActions = SetTweetsType


export interface SetTweetsType extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_TWEETS
    payload: TweetsState['items']
}

export interface FetchTweetsType extends Action<TweetsActionsType> {
    type: TweetsActionsType.FETCH_TWEETS
}



export const setTweets = (payload: TweetsState['items']): SetTweetsType => {
    return {
        type: TweetsActionsType.SET_TWEETS,
        payload
    }
}

export const fetchTweets = (): FetchTweetsType => {
    return {
        type: TweetsActionsType.FETCH_TWEETS,
    }
}
