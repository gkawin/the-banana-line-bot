import { Client } from '@line/bot-sdk'
import Boom from 'boom'
import _ from 'lodash'

import Config from '../../Config'

export default async (req: Object, res: Object, next: Function) => {
  const validate = !(_.isEmpty(req.body))
  if (!validate) next(Boom.badRequest())

  const client = new Client(Config.LINE)
  const events = req.body.events

  for (const event of events) {
    try {
      console.info({
        replyToken: event.replyToken,
        content: {
          type: 'text',
          message: 'heelo from line sdk'
        }
      })
      await client.replyMessage(event.replyToken, {
        type: 'text',
        message: 'heelo from line sdk'
      })
    } catch (err) {
      next(err)
    }
  }
}
