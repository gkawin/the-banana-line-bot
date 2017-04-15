import _ from 'lodash'

export function isValidation (request: Object) {
  return !(_.isEmpty(request.body))
}
