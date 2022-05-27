import axios from "axios";


export const usersApi = {
    fetchUsers(){
        return axios.get('http://localhost:3001/users').then((data)=>{
            console.log(data.data,'usersApi')
            return data.data})
    }
}