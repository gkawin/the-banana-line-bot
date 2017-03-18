import * as Functions from 'firebase-functions'
// import * as Admin from 'firebase-admin'
// import uuid from 'uuid'

// Admin.initializeApp(Functions.config().firebase)

exports.bot = Functions.https.onRequest((req, res) => {
  res.send('99999')
})
