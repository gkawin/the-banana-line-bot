import Boom from 'boom'

export default ({ service, apiUrl }) => ({
  async message (replyMessage) {
    try {
      return await service.post(apiUrl, replyMessage)
    } catch (error) {
      throw Boom.badRequest(JSON.stringify(error.response.data.error))
    }
  }
})
