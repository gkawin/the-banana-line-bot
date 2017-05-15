import axios from 'axios'

export default (accessToken = null) => axios.create({
  timeout: 10000,
  headers: !accessToken ? { } : {
    Authorization: `Bearer ${accessToken}`
  }
})
