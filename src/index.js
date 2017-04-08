import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'

import App from './App'

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.json())
app.use(helmet())

app.use('/v1', App)
app.use((error, req, res, next) => {
  const errOutput = error.output
  const statusCode = errOutput.statusCode
  const payload = errOutput.payload
  res.status(statusCode).json(payload)
  next()
})

app.listen(3000, () => {
  console.log('Sever is up!!!!!')
})