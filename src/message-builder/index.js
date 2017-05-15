
export default () => ({
  textMessage (text: String) {
    return {
      type: 'text',
      text: text
    }
  }
})
