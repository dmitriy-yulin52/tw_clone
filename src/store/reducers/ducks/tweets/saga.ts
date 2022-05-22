import {call, CallEffect, put, takeLatest} from 'redux-saga/effects'
import {setTweets, setTweetsLoadingState, TweetsActionsType} from "./actions";
import {AxiosResponse} from 'axios'
import {tweetsApi} from "../../../../services/api/tweets";
import {LoadingState, Tweet} from "./types";

const users = {
    items: [
        {
            "id": "6288da623155e75552339bad",
            "text": "Adipisicing qui dolor adipisicing Lorem.",
            "user": {
                "fullName": "Pratt Owens",
                "userName": "sophie",
                "avatarUrl": "https://jooinn.com/images/man-standing-on-street.jpg"
            }
        },
        {
            "id": "6288da62e64597ea30b1edff",
            "text": "Non do nisi adipisicing ad ullamco nulla id adipisicing veniam occaecat pariatur aute adipisicing voluptate.",
            "user": {
                "fullName": "Gallegos Irwin",
                "userName": "mcknight",
                "avatarUrl": "https://jooinn.com/images/man-standing-on-street.jpg"
            }
        },
        {
            "id": "6288da62fbb6714c5a38f5d9",
            "text": "Veniam do laborum ex aliqua occaecat duis in mollit Lorem ut.",
            "user": {
                "fullName": "Therese Gilliam",
                "userName": "queen",
                "avatarUrl": "https://jooinn.com/images/man-standing-on-street.jpg"
            }
        },
        {
            "id": "6288da62f21922926b8d2f4c",
            "text": "Exercitation exercitation veniam incididunt ex deserunt pariatur velit Lorem consectetur nisi fugiat tempor.",
            "user": {
                "fullName": "Lilian Dorsey",
                "userName": "shaffer",
                "avatarUrl": "https://jooinn.com/images/man-standing-on-street.jpg"
            }
        },
        {
            "id": "6288da62b69f36a7d77a4132",
            "text": "Exercitation elit aute dolor ipsum consectetur ut dolore Lorem ipsum est excepteur eiusmodExercitation elit aute dolor ipsum consectetur ut dolore Lorem ipsum est excepteur eiusmodExercitation elit aute dolor ipsum consectetur ut dolore Lorem ipsum est excepteur eiusmod.",
            "user": {
                "fullName": "Meyers Doyle",
                "userName": "haley",
                "avatarUrl": "https://jooinn.com/images/man-standing-on-street.jpg"
            }
        }
    ]
}


export function* fetchTweetsRequest(){
    try {
        // const data = yield call(tweetsApi.fetchTweets)
        yield put(setTweets(users.items))
    } catch (e) {
        yield put(setTweetsLoadingState(LoadingState.ERROR))
    }


}

export function* tweetsSaga() {
    yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
}