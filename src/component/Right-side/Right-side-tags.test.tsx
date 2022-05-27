import {RightSideTags} from "./Right-side-tags";
import {render, screen} from "@testing-library/react";
import {setTags} from "../../store/reducers/ducks/tags/actions";
import {tagsReducer} from "../../store/reducers/ducks/tags/reducer";
import {LoadingState} from "../../store/reducers/ducks/users/types";
import {Tag, TagsState} from "../../store/reducers/ducks/tags/types";


const tags: Tag[] = [
    {
        "id": "2",
        "fullName": "Sanya",
        "userName": "bolshoy",
        "text": "Non do nisi adipisicing ad ullamco nulla id adipisicing veniam occaecat pariatur aute adipisicing voluptate",
        "count": 2
    }
]


let startState: TagsState
beforeEach(() => {
    startState = {
        items: [],
        loadingState: LoadingState.NEVER
    }
})


describe('Right-side-tags', () => {

    test('empty list', () => {
        render(
            <RightSideTags tags={[]}/>
        )
        expect(screen.queryByRole('list')).toBeNull()
    })

    test('users should be added', () => {
        const action = setTags(tags)
        const end_state = tagsReducer(startState, action)

        expect(end_state.items[0].fullName).toBe('Sanya')
        expect(end_state.items.length).toEqual(1)
    })
})