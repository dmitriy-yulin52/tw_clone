import {RootState} from "../../../store";
import {TagsState} from "./types";
import {createSelector} from "reselect";
import {LoadingState} from "../tweets/types";


export const selectTags = (state: RootState): TagsState => state.tags
export const selectTagsItems = createSelector(selectTags, (tags) => tags.items)
const selectLoadingState = (state: RootState): LoadingState => selectTags(state).loadingState
export const selectIsTagsLoading = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADING
export const selectIsTagsLoaded = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADED
export const selectIsTagsError = (state: RootState): boolean => selectLoadingState(state) === LoadingState.ERROR