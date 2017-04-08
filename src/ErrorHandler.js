
export default function errorHandler (error, req, res, next) {
  const errOutput = error.output
  const statusCode = errOutput.statusCode
  const payload = errOutput.payload
  res.status(statusCode).json(payload)
  next()
}
