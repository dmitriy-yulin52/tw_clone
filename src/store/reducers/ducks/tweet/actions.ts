import {Action} from 'redux'
import {LoadingState} from "./types";
import {Tweet} from "../tweets/types";


export enum TweetDataActionsType {
    SET_TWEET_DATA = 'tweet/SET_DATA',
    FETCH_TWEET_DATA = 'tweet/FETCH_DATA',
    SET_LOADING_STATE = 'tweet/SET_LOADING_STATE'
}

export type TweetDataActions = SetTweetDataType | SetTweetDataLoadingStateType | FetchTweetDataType

/** types-actions*/
export interface SetTweetDataType extends Action<TweetDataActionsType> {
    type: TweetDataActionsType.SET_TWEET_DATA
    payload: Tweet
}
export interface FetchTweetDataType extends Action<TweetDataActionsType> {
    type: TweetDataActionsType.FETCH_TWEET_DATA
    payload:string
}
export interface SetTweetDataLoadingStateType extends Action<TweetDataActionsType> {
    type: TweetDataActionsType.SET_LOADING_STATE
    payload:LoadingState
}

/** actions */
export const setTweetData = (payload: Tweet): SetTweetDataType => {
    console.log(payload,'setTweetData')
    return {
        type: TweetDataActionsType.SET_TWEET_DATA,
        payload
    }
}
export const setTweetDataLoadingState = (payload:LoadingState): SetTweetDataLoadingStateType => {
    return {
        type: TweetDataActionsType.SET_LOADING_STATE,
        payload
    }
}
export const fetchTweetData = (payload:string): FetchTweetDataType => {
    return {
        type: TweetDataActionsType.FETCH_TWEET_DATA,
        payload
    }
}
