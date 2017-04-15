import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'

import App from './App'
import ErrorHandler from './ErrorHandler'

const app = express()
const port = process.env.PORT || 3000
const development = process.env.NODE_ENV === 'development'

app.use(morgan((development) ? 'dev' : 'combined'))
app.use(cors())
app.use(bodyParser.json())
app.use(helmet())

app.use('/v1', App)
app.use(ErrorHandler)

app.listen(port, () => {
  console.log('Sever is up!!!!!')
})
