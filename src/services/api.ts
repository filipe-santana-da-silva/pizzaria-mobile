import axios from 'axios'

const api = axios.create({
    baseURL: 'https://pizzaria-backend-pi.vercel.app'
})

export { api }