import {LoadingState} from "../tweets/types";
import {call, put, takeLatest} from "redux-saga/effects";
import {Tag} from "./types";
import {tagsApi} from "../../../../services/api/tags";
import {setTags, setTagsLoadingState, TagsActionsType} from "./actions";


export function* fetchTagsRequest(){
    try {
        const data:Tag[] = yield call(tagsApi.fetchTags)
        yield put(setTags(data))
    } catch (e) {
        yield put(setTagsLoadingState(LoadingState.ERROR))
    }
}




export function* tagsSaga() {
    yield takeLatest(TagsActionsType.FETCH_ITEMS, fetchTagsRequest)
}