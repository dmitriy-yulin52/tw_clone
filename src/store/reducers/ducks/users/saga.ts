import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {setUsers, setUsersLoadingState, UsersActionsType} from "./actions";
import {LoadingState, User} from "./types";
import {usersApi} from "../../../../services/api/users";

function* fetchUsersRequest(){
    try {
        const data:User[] = yield call(usersApi.fetchUsers)
        yield put(setUsers(data))
    } catch (e) {
        yield put(setUsersLoadingState(LoadingState.ERROR))
    }
}

export function* usersSaga() {
    yield takeLatest(UsersActionsType.FETCH_ITEMS, fetchUsersRequest)

}