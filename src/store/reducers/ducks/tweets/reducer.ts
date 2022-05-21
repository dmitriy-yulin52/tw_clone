import {LoadingState, TweetsState} from "./types";
import produce, {Draft} from "immer";
import {TweetsActions, TweetsActionsType} from "./actions";


const initialTweetsState: TweetsState = {
    items: [],
    loadingState: LoadingState.NEVER
}


export const tweetsReducer = produce((draft: Draft<TweetsState>, action: TweetsActions) => {

    const {type, payload} = action


    switch (type) {
        case TweetsActionsType.SET_LOADING_STATE:
            draft.loadingState = action.payload
            break
        case TweetsActionsType.SET_TWEETS:
            draft.items = payload
            draft.loadingState = LoadingState.LOADED
            break
        default:
            break
    }

}, initialTweetsState)