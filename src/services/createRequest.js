import axios from 'axios'

export const createRequest = (accessToken = null) => axios.create({
  timeout: 10000,
  headers: !accessToken ? { } : {
    Authorization: `Bearer ${accessToken}`
  }
})
