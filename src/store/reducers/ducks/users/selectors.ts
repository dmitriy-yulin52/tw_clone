import {RootState} from "../../../store";
import {User, UsersState} from "./types";
import {createSelector} from "reselect";
import {LoadingState} from "../tweets/types";
import {selectTags} from "../tags/selectors";


export const selectUsers = (state: RootState): UsersState => state.users
export const selectUsersItems = createSelector(selectUsers,(users)=>users.items)
const selectLoadingState = (state: RootState): LoadingState => selectUsers(state).loadingState
export const selectIsUsersLoading = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADING
export const selectIsUsersLoaded = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADED
export const selectIsUsersError = (state: RootState): boolean => selectLoadingState(state) === LoadingState.ERROR
