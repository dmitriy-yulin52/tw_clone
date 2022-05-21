import axios, {AxiosResponse} from "axios";
import {TweetsState} from "../../store/reducers/ducks/tweets/types";


export const tweetsApi = {
    fetchTweets(){
        return axios.get('https://jsonplaceholder.typicode.com/users').then((data) => {
            console.log(data.data, 'axios.data')
            return data
        })
    }

}