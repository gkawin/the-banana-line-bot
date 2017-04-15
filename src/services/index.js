
import createRequest from './createRequest'
import createReplyMessage from './createReplyMessage'
require('dotenv').config()

function getToken () {
  return process.env.ACCESS_TOKEN
}

export const authRequest = createRequest(getToken())
export const unAuthRequest = createRequest()

export const reply = createReplyMessage({
  service: authRequest,
  apiUrl: 'https://api.line.me/v2/bot/message/reply'
})
