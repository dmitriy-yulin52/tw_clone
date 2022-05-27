import {render, screen, getRoles} from "@testing-library/react";
import {RightSideUsers} from "./Right-side-users";
import {setUsers} from "../../store/reducers/ducks/users/actions";
import {usersReducer} from "../../store/reducers/ducks/users/reducer";
import {LoadingState, User, UsersState} from "../../store/reducers/ducks/users/types";

const users: User[] = [
    {
        "id": "1001",
        "name": "Ivanov",
        "userName": "ivanka",
        "avatarUrl": "https://jooinn.com/images/man-standing-on-street.jpg"
    },
    {
        "id": "1002",
        "name": "Therese",
        "userName": "queen",
        "avatarUrl": "https://jooinn.com/images/man-standing-on-street.jpg"
    }
]

let startState: UsersState
beforeEach(() => {
    startState = {
        items: [],
        loadingState: LoadingState.NEVER
    }
})


describe('Right-side-users', () => {

    test('empty list', () => {

        render(
            <RightSideUsers users={[]}/>
        )
        expect(screen.queryByRole('list')).toBeNull()
    })

    test('users should be added', () => {
        const action = setUsers(users)
        const end_state = usersReducer(startState, action)

        expect(end_state.items[0].name).toBe('Ivanov')
        expect(end_state.items[1].name).toBe('Therese')
        expect(end_state.items.length).toEqual(2)
    })
})