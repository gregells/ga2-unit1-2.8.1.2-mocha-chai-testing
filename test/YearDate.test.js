const YearDate = require('../YearDate')
const { describe, it } = require('mocha')
const chai = require('chai')
const expect = chai.expect

describe('YearDate class tests', () => {
  describe('The YearDate constructor should accept a day, month, and year', () => {
    it('should take 3 arguments in the constructor', function () {
      const date = new YearDate(20, 2, 2025)
      expect(date.constructor.length).to.equal(3)
    })
  })
  describe('There should be a method called .daysInMonth() that returns the total number of days in the current month', () => {
    it('should have a .daysInMonth() method', function () {
      const date = new YearDate(20, 2, 2025)
      expect(date.daysInMonth).to.not.be.undefined
    })
    it('should return 31 for January', function () {
      const date = new YearDate(20, 1, 2025)
      expect(date.daysInMonth()).to.equal(31)
    })
    it('should return 28 for February', function () {
      const date = new YearDate(20, 2, 2025)
      expect(date.daysInMonth()).to.equal(28)
    })
    it('should return 29 for February in leap year', function () {
      const date = new YearDate(20, 2, 2024)
      expect(date.daysInMonth()).to.equal(29)
    })
    it('should return 31 for March', function () {
      const date = new YearDate(20, 3, 2025)
      expect(date.daysInMonth()).to.equal(31)
    })
    it('should return 30 for April', function () {
      const date = new YearDate(20, 4, 2025)
      expect(date.daysInMonth()).to.equal(30)
    })
    it('should return 31 for May', function () {
      const date = new YearDate(20, 5, 2025)
      expect(date.daysInMonth()).to.equal(31)
    })
    it('should return 30 for June', function () {
      const date = new YearDate(20, 6, 2025)
      expect(date.daysInMonth()).to.equal(30)
    })
    it('should return 31 for July', function () {
      const date = new YearDate(20, 7, 2025)
      expect(date.daysInMonth()).to.equal(31)
    })
    it('should return 31 for August', function () {
      const date = new YearDate(20, 8, 2025)
      expect(date.daysInMonth()).to.equal(31)
    })
    it('should return 30 for September', function () {
      const date = new YearDate(20, 9, 2025)
      expect(date.daysInMonth()).to.equal(30)
    })
    it('should return 31 for October', function () {
      const date = new YearDate(20, 10, 2025)
      expect(date.daysInMonth()).to.equal(31)
    })
    it('should return 30 for November', function () {
      const date = new YearDate(20, 11, 2025)
      expect(date.daysInMonth()).to.equal(30)
    })
    it('should return 31 for December', function () {
      const date = new YearDate(20, 12, 2025)
      expect(date.daysInMonth()).to.equal(31)
    })
  })
  describe('There should be a method called .nextDay() that increments a YearDate object from one day to the next', () => {
    it('should have a .nextDay() method', function () {
      const date = new YearDate(20, 2, 2025)
      expect(date.nextDay).to.not.be.undefined
    })
    it('should correctly increment days within the month', function () {
      const date = new YearDate(20, 2, 2025)
      expect(date.nextDay()).to.equal(new YearDate(21, 2, 2025))
    })
    it('should correctly increment days at the end of the month', function () {
      const date = new YearDate(28, 2, 2025)
      expect(date.nextDay()).to.equal(new YearDate(1, 3, 2025))
    })
  })
  describe('There should be a prettyPrint() method that returns a string like "January 1st, 1988".', () => {
    it('should have a .prettyPrint() method', function () {
      const date = new YearDate(20, 2, 2025)
      expect(date.prettyPrint).to.not.be.undefined
    })
    it('should work for 1st of the month', function () {
      const date = new YearDate(1, 1, 1988)
      expect(date.nextDay()).to.equal('January 1st, 1988')
    })
    it('should work for 21st of the month', function () {
      const date = new YearDate(21, 1, 1988)
      expect(date.nextDay()).to.equal('January 21st, 1988')
    })
    it('should work for 2nd of the month', function () {
      const date = new YearDate(2, 4, 1999)
      expect(date.nextDay()).to.equal('April 2nd, 1999')
    })
    it('should work for 22nd of the month', function () {
      const date = new YearDate(22, 4, 1999)
      expect(date.nextDay()).to.equal('April 22nd, 1999')
    })
    it('should work for 3rd of the month', function () {
      const date = new YearDate(3, 6, 2001)
      expect(date.nextDay()).to.equal('June 3rd, 2001')
    })
    it('should work for 23rd of the month', function () {
      const date = new YearDate(3, 6, 2001)
      expect(date.nextDay()).to.equal('June 23rd, 2001')
    })
    it('should work for 4th of the month', function () {
      const date = new YearDate(4, 8, 2005)
      expect(date.nextDay()).to.equal('August 4th, 2005')
    })
    it('should work for 30th of the month', function () {
      const date = new YearDate(30, 8, 2005)
      expect(date.nextDay()).to.equal('August 30th, 2005')
    })
  })
  describe('There should be a .daysBetween(other) method that returns the numbers of days between two dates.', () => {
    it('should have a .daysBetween() method', function () {
      const date = new YearDate(20, 2, 2025)
      expect(date.daysBetween).to.not.be.undefined
    })
    it('should work for date1 > date2', function () {
      const date1 = new YearDate(20, 8, 2005)
      const date2 = new YearDate(30, 8, 2005)
      expect(date2.daysBetween(date1)).to.equal(10)
    })
    it('should work for date2 > date1', function () {
      const date1 = new YearDate(25, 8, 2005)
      const date2 = new YearDate(12, 8, 2005)
      expect(date2.daysBetween(date1)).to.equal(13)
    })
    it('should work across months', function () {
      const date1 = new YearDate(20, 8, 2005)
      const date2 = new YearDate(12, 9, 2005)
      expect(date2.daysBetween(date1)).to.equal(23)
    })
    it('should work across years', function () {
      const date1 = new YearDate(20, 8, 2005)
      const date2 = new YearDate(20, 8, 2006)
      expect(date2.daysBetween(date1)).to.equal(365)
    })
  })
})
