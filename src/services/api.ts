import axios from 'axios'

const baseURL = '/api'

export const newAxios = axios.create({ baseURL })

type CreateUser = (params: {
  name: string
  username: string
}) => Promise<{ data: any; status: 'success' | 'failed' }>

const createUser: CreateUser = async ({ name, username }) => {
  try {
    const response = await newAxios.post('/users', { name, username })

    return {
      data: response.data,
      status: 'success',
    }
  } catch (error: any) {
    return { data: error?.response?.data ?? null, status: 'failed' }
  }
}

export const api = {
  createUser,
}
