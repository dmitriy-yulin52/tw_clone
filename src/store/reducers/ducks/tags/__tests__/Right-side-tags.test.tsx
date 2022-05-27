import {setTags} from "../actions";
import {tagsReducer} from "../reducer";
import {Tag, TagsState} from "../types";
import {LoadingState} from "../../tweets/types";


const tags: Tag[] = [
    {
        "id": "2",
        "fullName": "Sanya",
        "userName": "bolshoy",
        "text": "Non do nisi adipisicing ad ullamco nulla id adipisicing veniam occaecat pariatur aute adipisicing voluptate",
        "count": 2
    }
]


describe('tags test', () => {


       const initialTagsState: TagsState = {
            items: [],
            loadingState: LoadingState.NEVER
        }

    test('tagsReducer', () => {
        const data = {
            "payload": tags, "type": "tags/SET_ITEMS"
        }

        const action = setTags(tags)
        const end_state = tagsReducer(initialTagsState, action)

        expect(action).toEqual(data)
        expect(end_state.items[0].fullName).toBe('Sanya')
        expect(end_state.items.length).toEqual(1)
        expect(end_state).toMatchSnapshot()
    })
})