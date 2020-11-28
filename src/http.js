import axios from 'axios'

const http = axios.create({
    baseURL: 'http://localhost:8008/api/',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})

export default http
