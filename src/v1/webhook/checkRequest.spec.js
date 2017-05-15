import assert from 'power-assert'

import * as CheckRequest from './checkRequest'

describe('check post request', () => {
  describe('validation', () => {
    it('should reject with empty request body', () => {
      const result = CheckRequest.isValidation({ })
      assert.equal(result, false)
    })
  })
})
