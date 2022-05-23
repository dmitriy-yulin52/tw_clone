import {RootState} from "../../../store";
import {Tag} from "./types";


export const tags_items = (state:RootState):Tag[]=>state.tags.items