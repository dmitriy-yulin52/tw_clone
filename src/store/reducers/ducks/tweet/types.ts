import {Tweet} from "../tweets/types";

export enum LoadingState{
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER',

}


export interface TweetDataState {
    data:Tweet | null
    loadingState:LoadingState

}