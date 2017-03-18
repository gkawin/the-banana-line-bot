import * as Functions from 'firebase-functions'
import * as Admin from 'firebase-admin'
// import axois from 'axios'
import uuid from 'uuid'
import { ACCESS_TOKEN } from './config'

Admin.initializeApp(Functions.config().firebase)

exports.bot = Functions.https.onRequest((req, res) => {
  res.send(uuid.v4())
})
