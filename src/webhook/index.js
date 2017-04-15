import Boom from 'boom'
import _ from 'lodash'

export default function webhook (req, res, next) {
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

  // axios.post(
  //     'https://api.line.me/v2/bot/message/reply',
  //     reply,
  //   {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`
  //     }
  //   }
  //   ).then((response) => {
  //     res.status(200).json({ success: true })
  //   })
  //   .catch((err) => {
  //     const response = err.response
  //     const statusCode = response.status
  //     if (statusCode === 400) {
  //       next(Boom.badRequest(JSON.stringify(response.data)))
  //       return
  //     }
  //     next(Boom.notFound(JSON.stringify(response.data)))
  //   })
}
