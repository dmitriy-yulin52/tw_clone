import {RootState} from "../../../store";
import {User, UsersState} from "./types";
import {createSelector} from "reselect";


export const selectUsers = (state: RootState): UsersState => state.users
export const selectUsersItems = createSelector(selectUsers,(users)=>users.items)
