import assert from 'power-assert'

import * as CheckRequest from './checkRequest'

describe('check post request', () => {
  describe('validation', () => {
    it('should reject with empty request body', () => {
      const result = CheckRequest.isValidation({ })
      assert.equal(result, false)
    })
    it('should rejext with body request is not an object type', () => {
      const result = CheckRequest.isValidation({ body: 'fooo' })
      assert.equal(result, false)
    })
  })
})
