require('dotenv').config()
import Express from 'express'
import Boom from 'boom'
import axios from 'axios'
import _ from 'lodash'

import * as Services from './services'
const router = Express.Router()

export default [
  router.get('/ping', (req, res) => { res.status(200).json({ success: true }) }),
  router.post('/webhook', (req, res, next) => {
    const body = req.body
    if (_.isEmpty(body)) {
      next(Boom.badRequest())
      return
    }

    const events = body.events
    const reply = {
      replyToken: events[0].replyToken,
      messages: [
        {
          'type': 'text',
          'text': 'Hello, user'
        },
        {
          'type': 'text',
          'text': 'May I help you?'
        }
      ]
    }

    Services.post(
      'https://api.line.me/v2/bot/message/reply',
    )

    axios.post(

      reply,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`
        }
      }
    ).then((response) => {
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
