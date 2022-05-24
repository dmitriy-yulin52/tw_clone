import {Action} from 'redux'
import {LoadingState, User} from "./types";


export enum UsersActionsType {
    SET_ITEMS = 'users/SET_ITEMS',
    FETCH_ITEMS = 'users/FETCH_ITEMS',
    SET_LOADING_STATE = 'users/SET_LOADING_STATE'
}

export type UsersActions = SetUsersType | SetUsersLoadingStateType | FetchUsersType

/** types-actions*/
export interface SetUsersType extends Action<UsersActionsType> {
    type: UsersActionsType.SET_ITEMS
    payload: User[]
}
export interface FetchUsersType extends Action<UsersActionsType> {
    type: UsersActionsType.FETCH_ITEMS
}
export interface SetUsersLoadingStateType extends Action<UsersActionsType> {
    type: UsersActionsType.SET_LOADING_STATE
    payload:LoadingState
}

/** actions */
export const setUsers = (payload: User[]): SetUsersType => {

    console.log(payload,'payload')
    return {
        type: UsersActionsType.SET_ITEMS,
        payload
    }
}
export const setUsersLoadingState = (payload:LoadingState): SetUsersLoadingStateType => {
    return {
        type: UsersActionsType.SET_LOADING_STATE,
        payload
    }
}
export const fetchUsers = (): FetchUsersType => {
    return {
        type: UsersActionsType.FETCH_ITEMS,
    }
}
