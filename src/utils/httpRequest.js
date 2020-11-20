import axios from "axios"

const http = axios.create({
    baseURL:'http://localhost:7779/wd',
    timeout: 1000 * 50,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    }
    
})
export default http