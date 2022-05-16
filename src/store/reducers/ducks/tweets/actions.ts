import {Action} from 'redux'
import {TweetsState} from "./types";


export enum TweetsActionsType {
    SET_TWEETS = 'tweets/SET_TWEETS'
}

export type TweetsActions = SetTweetsType


export interface SetTweetsType extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_TWEETS
    payload: TweetsState['items']
}

export const setTweets = (payload: TweetsState['items']): SetTweetsType => {
    return {
        type: TweetsActionsType.SET_TWEETS,
        payload
    }
}