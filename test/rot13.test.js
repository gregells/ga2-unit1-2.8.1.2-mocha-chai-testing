const rot13 = require('../rot13')
const { describe, it } = require('mocha')
const chai = require('chai')
const expect = chai.expect

describe('rot13 tests', () => {
  describe('it should rotate characters by 13 places', () => {
    it('should convert a into n', function () {
      // assert.strictEqual('n', rot13('a'))
      // rot13('a').should.equal('n')
      expect(rot13('a')).to.equal('n')
    })
    it('should convert n into a', function () {
      expect(rot13('n')).to.equal('a')
    })
    it('should convert z into m', function () {
      expect(rot13('z')).to.equal('m')
    })
    it('should convert m into z', function () {
      expect(rot13('m')).to.equal('z')
    })
    it('should convert hello into uryyb', function () {
      expect(rot13('hello')).to.equal('uryyb')
    })
  })
  describe('it should preserve capatilisation', () => {
    it('should convert A into N', function () {
      expect(rot13('A')).to.equal('N')
    })
    it('should convert N into A', function () {
      expect(rot13('N')).to.equal('A')
    })
    it('should convert Z into M', function () {
      expect(rot13('Z')).to.equal('M')
    })
    it('should convert M into Z', function () {
      expect(rot13('M')).to.equal('Z')
    })
    it('should convert urYYB into heLLO', function () {
      expect(rot13('urYYB')).to.equal('heLLO')
    })
    it('should convert heLLO into urYYB', function () {
      expect(rot13('heLLO')).to.equal('urYYB')
    })
  })
  describe('it should preserve whitespace and punctuation', () => {
    it('should preserve whitespace', function () {
      expect(rot13('Today I went to the store')).to.equal('Gbqnl V jrag gb gur fgber')
    })
    it('should preserve punctuation', function () {
      expect(rot13("I'm telling you, 'go away!' Can you hear me?")).to.equal("V'z gryyvat lbh, 'tb njnl!' Pna lbh urne zr?")
    })
  })
})
