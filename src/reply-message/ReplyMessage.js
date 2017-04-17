class ReplyMessage {
  constructor (replyToken) {
    this._replyToken = replyToken
  }
  getMessage () {
    return {
      replyToken: this._replyToken,
      messages: [{
        type: 'text',
        text: `รายละเอียดคอร์ส พิมพ์ 1/n
        สอบถามราคาและโปรโมชั่น พิมพ์ 2/n`
      }]
    }
  }
}

export default ReplyMessage
