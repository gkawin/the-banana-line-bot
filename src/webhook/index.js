import Boom from 'boom'

import * as CheckRequest from './checkRequest'
import * as Services from '../services'

export default async function webhook (request: Object, response: Object, next: Function) {
  const validate = CheckRequest.isValidation(request)
  if (!validate) next(Boom.badRequest())

  for (const event of request.body.events) {
    const replyToken = event.replyToken
    const messages = {
      replyToken: replyToken,
      messages: [
        {
          'type': 'text',
          'text': `Hello ${replyToken}`
        },
        {
          'type': 'text',
          'text': 'May I help you?'
        }
      ]
    }
    try {
      await Services.reply.message(messages)
    } catch (e) {
      next(e)
    }
  }
}
