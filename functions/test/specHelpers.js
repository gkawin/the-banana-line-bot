import assert from 'power-assert'
import chai from 'chai'
const expect = chai.expect

Object.assign(global, {
  expect,
  assert
})

chai.use(require('chai-as-promised'))
chai.use(require('dirty-chai'))
