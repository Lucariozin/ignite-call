import { apiHTTP } from './api.config'

import type {
  CreateUser,
  UpdateUserProfile,
  SaveUserTimeIntervals,
} from './api.types'

const createUser: CreateUser = async ({ name, username }) => {
  try {
    const body = { name, username }

    const response = await apiHTTP.post('/users', body)

    return {
      data: response.data,
      status: 'success',
    }
  } catch (error: any) {
    return { data: error?.response?.data ?? null, status: 'failed' }
  }
}

const saveUserTimeIntervals: SaveUserTimeIntervals = async ({
  timeIntervals,
}) => {
  try {
    const body = { timeIntervals }

    const response = await apiHTTP.post('/users/time-intervals', body)

    return {
      data: response.data,
      status: 'success',
    }
  } catch (error: any) {
    return { data: error?.response?.data ?? null, status: 'failed' }
  }
}

const updateUserProfile: UpdateUserProfile = async ({ profile }) => {
  try {
    const body = { profile }

    const response = await apiHTTP.put('/users/profile', body)

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
  updateUserProfile,
  saveUserTimeIntervals,
}
