import Boom from 'boom'

import * as CheckRequest from './checkRequest'
import * as Services from '../services'
// import ReplyMessage from '../reply-message/ReplyMessage'
import TemplateMessage from '../template-message/TemplateMessage'

export default async function webhook (request: Object, response: Object, next: Function) {
  const validate = CheckRequest.isValidation(request)
  if (!validate) next(Boom.badRequest())

  for (const event of request.body.events) {
    const templateMessage = new TemplateMessage(event.replyToken)
    try {
      await Services.reply.message(templateMessage.getMessage())
    } catch (e) {
      next(e)
    }
  }
}
