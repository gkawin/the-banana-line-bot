import Boom from 'boom'
import _ from 'lodash'

export default async (req: Object, res: Object, next: Function) => {
  const validate = !(_.isEmpty(req.body))
  if (!validate) next(Boom.badRequest())
  console.log(req.body)
  res.json('fuck')
}
