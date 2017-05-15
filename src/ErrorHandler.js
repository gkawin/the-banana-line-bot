import * as exceptions from '@line/bot-sdk/exceptions'

export default function errorHandler (err, req, res, next) {
  if (err instanceof exceptions.SignatureValidationFailed) {
    res.status(401).json({ message: err.signature })
    return
  }

  if (err instanceof exceptions.JSONParseError) {
    res.status(400).json({ message: err.raw })
    return
  }

  if (err instanceof exceptions.HTTPError) {
    res.status(err.statusCode).json({ message: err.statusMessage })
    return
  }

  if (err instanceof exceptions.RequestError) {
    res.status(400).json({ message: err.code })
    return
  }

  res.status(500).json({ message: 'Internal error' })
}
