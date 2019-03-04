const assert = require('chai').assert;
const app = require("./app");

describe('app', function(){
  it('app should return amber', function(){
    assert.equal(app(), 'amber')
  })
})