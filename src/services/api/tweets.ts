import axios, {AxiosResponse} from "axios";
import {Tweet,} from "../../store/reducers/ducks/tweets/types";


export const tweetsApi = {
    fetchTweets(): Promise<AxiosResponse<Tweet[]>> {
        return axios.get('http://localhost:3001/tweets').then(({data}) => data)
    },
    fetchTweetData(id: string): Promise<Tweet[]> {
        return axios.get(`http://localhost:3001/tweets?id=` + id).then(({data}) => data)
    }
}