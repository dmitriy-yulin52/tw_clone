import {RootState} from "../../../store";
import {Tag, TagsState} from "./types";
import {createSelector} from "reselect";
import {selectUsers} from "../users/selectors";


export const selectTags = (state:RootState):TagsState=>state.tags
export const selectTagsItems = createSelector(selectTags,(tags)=>tags.items)