// import {RootState} from "../../../store";
// import {LoadingState, TweetsState} from "./types";
// import {createSelector} from "reselect";
//
//
import {RootState} from "../../../store";
import {TweetsState} from "../tweets/types";

export const selectTweetData = (state: RootState): TweetsState => state.tweets
// export const selectTweetsItems = createSelector(selectTweets,(tweets)=>tweets.items)
// const selectLoadingState = (state: RootState): LoadingState => selectTweets(state).loadingState
// export const selectIsTweetsLoading = (state:RootState):boolean=> selectLoadingState(state) === LoadingState.LOADING
// export const selectIsTweetsLoaded = (state:RootState):boolean=> selectLoadingState(state) === LoadingState.LOADED
