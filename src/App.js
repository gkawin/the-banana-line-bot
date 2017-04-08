import Express from 'express'
const router = Express.Router()

export default [
  router.post('/webhook', (req, res) => {
    const body = req.body
    throw new Error('hello')
    res.status(200).json(body)
  })
]
