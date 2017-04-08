require('dotenv').config()
import Express from 'express'
import Boom from 'boom'
import axios from 'axios'
import _ from 'lodash'

const router = Express.Router()

export default [
  router.post('/webhook', (req, res, next) => {
    const events = req.body.events
    if (_.isEmpty(events)) {
      next(Boom.badRequest())
      return
    }


    const reply = {
      replyToken: events[0].replyToken,
      messages: [
        {
            "type":"text",
            "text":"Hello, user"
        },
        {
            "type":"text",
            "text":"May I help you?"
        }
      ]
    }

    axios.post(
      'https://api.line.me/v2/bot/message/reply',
      reply,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`
        }
      }
    ).then(() => {
      res.status(200).json({ success: true })
    })
    .catch((err) => {
      const response = err.response
      const statusCode = response.status
      if (statusCode === 400) {
        next(Boom.badRequest(JSON.stringify(response.data)))
        return
      }
      next(Boom.notFound(JSON.stringify(response.data)))
    })
  })
]
