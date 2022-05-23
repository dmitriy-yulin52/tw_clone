import {RootState} from "../../../store";
import {User} from "./types";


export const selectUsers = (state: RootState): User[] => state.users.items
