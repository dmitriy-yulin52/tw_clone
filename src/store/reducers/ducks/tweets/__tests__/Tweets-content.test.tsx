import {setTweets} from "../actions";
import {tweetsReducer} from "../reducer";
import {LoadingState, TweetsState} from "../types";


const tweets = [{
    "id": "6288da623155e75552339bad",
    "text": "text1",
    "user": {
        "fullName": "Pratt Owens",
        "userName": "sophie",
        "avatarUrl": "https://jooinn.com/images/man-standing-on-street.jpg"
    }
},
    {
        "id": "6288da62e64597ea30b1edff",
        "text": "text2",
        "user": {
            "fullName": "Gallegos Irwin",
            "userName": "mcknight",
            "avatarUrl": "https://jooinn.com/images/man-standing-on-street.jpg"
        }
    },]

describe('tweets test', () => {


    test('tweetsReducer', () => {
        const initialTweetsState: TweetsState = {
            items: [],
            loadingState: LoadingState.NEVER
        }

        const action = setTweets(tweets)
        const end_state = tweetsReducer(initialTweetsState, action)

        expect(end_state.items.length).toEqual(2)
        expect(end_state.items[0].text).toBe('text1')
        expect(end_state.items[1].text).toBe('text2')
        expect(end_state).toMatchSnapshot()
    })
})