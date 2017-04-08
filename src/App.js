import Express from 'express'
import Boom from 'boom'

const router = Express.Router()

export default [
  router.post('/webhook', (req, res) => {
    const body = req.body
    throw Boom.badRequest('what the fuck')
    res.status(200).json(body)
  })
]
