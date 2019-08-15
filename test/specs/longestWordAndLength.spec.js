const phrases = require('../../phrases.conf')
const longestWordAndLength = require('../../src/longestWordAndLength')
const longestWordAndLengthFixture = require('../fixtures/longestWordAndLength.fixture')
const expect = require('chai').expect

describe('Return Longest Word and Length', () => {
  for (let i = 0; i < phrases.length; i += 1) {
    it('longestWordAndLength("' + phrases[i] + '")', () => {
      // Expect the function to return values as documented in ../fixtures/longestWordAndLength.fixture
      expect(longestWordAndLength(phrases[i]).toString()).to.equal(longestWordAndLengthFixture[i].toString())
    })
  }
})
