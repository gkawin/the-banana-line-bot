import Boom from 'boom'

export default ({ service, apiUrl }) => ({
  async message (token: String, message: String) {
    try {
      const replyObject = {
        replyToken: token,
        messages: [{ type: 'text', text: message }]
      }
      return await service.post(apiUrl, replyObject)
    } catch (error) {
      throw Boom.badRequest(JSON.stringify(error.response.data.error))
    }
  }
})
