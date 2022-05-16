import {LoadingState, TweetsState} from "./types";
import produce, {Draft} from "immer";
import {TweetsActions, TweetsActionsType} from "./actions";


const initialTweetsState: TweetsState = {
    items: [],
    loadingState: LoadingState.NEVER
}


export const tweetsReducer = produce((draft: Draft<TweetsState>, action: TweetsActions) => {

    const {type, payload} = action
    if (type === TweetsActionsType.SET_TWEETS) {
        draft.items = payload
    }

}, initialTweetsState)