
import createRequest from './createRequest'
import createReplyMessage from './createReplyMessage'
import createGetProfile from './createGetProfile'
require('dotenv').config()

const ACCESS_TOKEN = process.env.ACCESS_TOKEN
const ENDPOINT_BASE = 'https://api.line.me'

export const authRequest = createRequest(ACCESS_TOKEN)
export const unAuthRequest = createRequest()

export const reply = createReplyMessage({
  service: authRequest,
  apiUrl: `${ENDPOINT_BASE}/v2/bot/message/reply`
})

export const getProfile = createGetProfile({
  service: authRequest,
  apiUrl: `${ENDPOINT_BASE}/v2/bot/profile/`
})
