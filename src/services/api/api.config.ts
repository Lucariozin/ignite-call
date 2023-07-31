import axios from 'axios'

const baseURL = '/api'

export const apiHTTP = axios.create({ baseURL })
