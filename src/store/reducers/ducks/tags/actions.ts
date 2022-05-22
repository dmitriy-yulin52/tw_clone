import {Action} from 'redux'
import {LoadingState, Tag} from "./types";


export enum TagsActionsType {
    SET_ITEMS = 'tags/SET_ITEMS',
    FETCH_ITEMS = 'tags/FETCH_ITEMS',
    SET_LOADING_STATE = 'tags/SET_LOADING_STATE'
}

export type TagsActions = SetTagsType | SetTagsLoadingStateType | FetchTagsType

/** types-actions*/
export interface SetTagsType extends Action<TagsActionsType> {
    type: TagsActionsType.SET_ITEMS
    payload: Tag[]
}
export interface FetchTagsType extends Action<TagsActionsType> {
    type: TagsActionsType.FETCH_ITEMS
}
export interface SetTagsLoadingStateType extends Action<TagsActionsType> {
    type: TagsActionsType.SET_LOADING_STATE
    payload:LoadingState
}

/** actions */
export const setTweets = (payload: Tag[]): SetTagsType => {

    console.log(payload,'payload')
    return {
        type: TagsActionsType.SET_ITEMS,
        payload
    }
}
export const setTweetsLoadingState = (payload:LoadingState): SetTagsLoadingStateType => {
    return {
        type: TagsActionsType.SET_LOADING_STATE,
        payload
    }
}
export const fetchTweets = (): FetchTagsType => {
    return {
        type: TagsActionsType.FETCH_ITEMS,
    }
}
