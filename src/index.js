import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'

const app = express()

//
app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.json())
app.use(helmet)

app.get('/', (req, res) => {
  res.status(200).json('hello world')
})

app.listen(3000, () => {
  console.log('Sever is up!!!!!')
})
