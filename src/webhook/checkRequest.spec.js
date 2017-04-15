import assert from 'power-assert'

import checkRequest from './checkRequest'

describe('check post request', () => {
  it('should reject with empty request body', () => {
    const result = checkRequest({})
    assert(result === true)
  })
})
