import {LoadingState, UsersState} from "./types";
import produce, {Draft} from "immer";
import {UsersActions, UsersActionsType} from "./actions";


const initialUsersState: UsersState = {
    items: [],
    loadingState: LoadingState.NEVER
}


export const usersReducer = produce((draft: Draft<UsersState>, action: UsersActions) => {


    switch (action.type) {
        case UsersActionsType.SET_LOADING_STATE:
            draft.loadingState = action.payload
            break
        case UsersActionsType.SET_ITEMS:
            draft.items = action.payload
            draft.loadingState = LoadingState.LOADED
            break
        case UsersActionsType.FETCH_ITEMS:
            draft.items = []
            draft.loadingState = LoadingState.LOADING
            break
        default:
            break
    }

}, initialUsersState)