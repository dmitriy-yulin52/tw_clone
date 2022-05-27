import {setUsers} from "../actions";
import {usersReducer} from "../reducer";
import {User, UsersState} from "../types";
import {LoadingState} from "../../tweets/types";

const users_test: User[] = [
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


describe('users test', () => {

    test('usersReducer', () => {

        const initialUsersState: UsersState = {
            items: [],
            loadingState: LoadingState.NEVER
        }

        const data = {
            payload: users_test,
            type: 'users/SET_ITEMS',
        }
        const action = setUsers(users_test)
        const end_state = usersReducer(initialUsersState, action)

        expect(action).toEqual(data)
        expect(end_state.items[0].name).toBe('Ivanov')
        expect(end_state.items[1].name).toBe('Therese')
        expect(end_state.items.length).toEqual(2)
        expect(end_state).toMatchSnapshot()
    })
})