import axios from 'axios'

const baseDomain = process.env.VUE_APP_BACKEND_API;

let Repository = axios.create({
    baseURL: baseDomain,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
})

export default Repository