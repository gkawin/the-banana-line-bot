import Express from 'express'

import Webhook from './webhook'
const router = Express.Router()

export default [
  router.get('/ping', (req, res) => { res.status(200).json({ success: true }) }),
  router.post('/webhook', Webhook)
]
