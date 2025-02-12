class YearDate {
  constructor (day, month, year) {
    this.day = day,
    this.month = month,
    this.year = year,
    this.MONTHS = [
      { name: 'January', days: 31 },
      { name: 'February', days: 28 },
      { name: 'March', days: 31 },
      { name: 'April', days: 30 },
      { name: 'May', days: 31 },
      { name: 'June', days: 30 },
      { name: 'July', days: 31 },
      { name: 'August', days: 31 },
      { name: 'September', days: 30 },
      { name: 'October', days: 31 },
      { name: 'November', days: 30 },
      { name: 'December', days: 31 }
    ]
  }

  daysInMonth () {
    if (this.month === 2 && this.isLeapYear()) return 29
    return this.MONTHS[this.month - 1].days
  }

  isLeapYear (year = this.year) {
    if (year % 400 === 0) return true
    if (year % 100 === 0 && year % 400 !== 0) return false
    if (year % 4 === 0) return true
    return false
  }

}

module.exports = YearDate
