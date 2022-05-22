import axios, {AxiosResponse} from "axios";
import {Tweet, TweetsState} from "../../store/reducers/ducks/tweets/types";


export const tweetsApi = {
    fetchTweets():Promise<AxiosResponse<Tweet[]>>{
        return axios.get('http://localhost:3001/tweets').then((data) => {
            console.log(data.data, 'axios.data1')
            return data.data
        })
    }

}