import Boom from 'boom'

import * as CheckRequest from './checkRequest'
import * as Services from '../services'

class ReplyMessage {
  constructor (replyToken) {
    this._replyToken = replyToken
  }
  getMenu () {
    return {
      replyToken: this._replyToken,
      messages: [{
        type: 'text',
        text: `รายละเอียดคอร์ส พิมพ์ 1/n
        สอบถามราคาและโปรโมชั่น พิมพ์ 2/n`
      }]
    }
  }
}

export default async function webhook (request: Object, response: Object, next: Function) {
  const validate = CheckRequest.isValidation(request)
  if (!validate) next(Boom.badRequest())

  for (const event of request.body.events) {
    const replyMessage = new ReplyMessage(event.replyToken)
    console.log(replyMessage.getMenu())
    try {
      await Services.reply.message(replyMessage.getMenu())
    } catch (e) {
      next(e)
    }
  }
}
