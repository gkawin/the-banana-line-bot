import Boom from 'boom'

import * as CheckRequest from './checkRequest'
import * as Services from '../services'

export default async function webhook (request: Object, response: Object, next: Function) {
  const validate = CheckRequest.isValidation(request)
  if (!validate) next(Boom.badRequest())

  try {
    const replyToken = request.body.events[0].replyToken
    const messages = {
      replyToken: replyToken,
      messages: [
        {
          'type': 'text',
          'text': 'Hello, Refactor now'
        },
        {
          'type': 'text',
          'text': 'May I help you?'
        }
      ]
    }
    await Services.reply.message(messages)
  } catch (e) {
    next(e)
  }
}
