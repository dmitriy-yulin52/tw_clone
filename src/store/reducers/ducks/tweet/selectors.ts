import {RootState} from "../../../store";
import {createSelector} from "reselect";
import {LoadingState, TweetDataState} from "./types";

export const selectTweetData = (state: RootState):TweetDataState => state.tweet
export const selectTweetItems = createSelector(selectTweetData,(tweet)=>tweet.data)
const selectLoadingState = (state: RootState): LoadingState => selectTweetData(state).loadingState
export const selectIsTweetLoading = (state:RootState):boolean=> selectLoadingState(state) === LoadingState.LOADING
export const selectIsTweetLoaded = (state:RootState):boolean=> selectLoadingState(state) === LoadingState.LOADED
