
import Joi from 'joi'

export function isValidation (request: Object) {
  const schema = Joi.object().keys({
    body: Joi.object().required()
  })
  const { error } = Joi.validate(request, schema)
  return !error
}

export function isValidRequest (request: Object) {
  return true
  // console.info(validation(request))
}
