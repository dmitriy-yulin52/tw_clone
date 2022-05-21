import {Action} from 'redux'
import {LoadingState, TweetsState} from "./types";


export enum TweetsActionsType {
    SET_TWEETS = 'tweets/SET_TWEETS',
    FETCH_TWEETS = 'tweets/FETCH_TWEETS',
    SET_LOADING_STATE = 'tweets/SET_LOADING_STATE'
}

export type TweetsActions = SetTweetsType | SetTweetsLoadingStateType

/** types-actions*/
export interface SetTweetsType extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_TWEETS
    payload: TweetsState['items']
}
export interface FetchTweetsType extends Action<TweetsActionsType> {
    type: TweetsActionsType.FETCH_TWEETS
}
export interface SetTweetsLoadingStateType extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_LOADING_STATE
    payload:LoadingState
}

/** actions */
export const setTweets = (payload: TweetsState['items']): SetTweetsType => {
    return {
        type: TweetsActionsType.SET_TWEETS,
        payload
    }
}
export const setTweetsLoadingState = (payload:LoadingState): SetTweetsLoadingStateType => {
    return {
        type: TweetsActionsType.SET_LOADING_STATE,
        payload
    }
}
export const fetchTweets = (): FetchTweetsType => {
    return {
        type: TweetsActionsType.FETCH_TWEETS,
    }
}
