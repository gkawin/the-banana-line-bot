import { middleware } from '@line/bot-sdk'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'

import Routes from './v1/Routes'
import ErrorHandler from './ErrorHandler'
import Config from './Config'

const app = express()
const port = process.env.PORT || 3000
const development = process.env.NODE_ENV === 'development'

app.use(morgan((development) ? 'dev' : 'combined'))
app.use(cors())
app.use(middleware(Config.LINE))
app.use(bodyParser.json())
app.use(helmet())

app.use('/v1', Routes)
app.use(ErrorHandler)

app.listen(port, () => {
  console.log('Sever is up!!!!!')
})
