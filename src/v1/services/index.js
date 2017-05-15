
import createRequest from './createRequest'
import Config from '../../Config'

export const authRequest = createRequest(Config.LINE.channelAccessToken)
export const unAuthRequest = createRequest()
