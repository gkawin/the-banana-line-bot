const development = process.env.NODE_ENV === 'development'
if (development) require('dotenv').config()

export default {
  LINE: {
    channelAccessToken: process.env.ACCESS_TOKEN,
    channelSecret: process.env.CHANNEL_SECRET,
  }
}
