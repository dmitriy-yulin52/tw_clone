import axios from "axios";


export const tagsApi = {
    fetchTags(){
        return axios.get('http://localhost:3001/tags').then((data)=>{

            console.log(data.data,'tags-data')
            return data.data})
    }
}