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

  prettyPrint () {
    if ([1, 21, 31].includes(this.day)) return `${this.MONTHS[this.month - 1].name} ${this.day}st, ${this.year}`
    if ([2, 22].includes(this.day)) return `${this.MONTHS[this.month - 1].name} ${this.day}nd, ${this.year}`
    if ([3, 23].includes(this.day)) return `${this.MONTHS[this.month - 1].name} ${this.day}rd, ${this.year}`
    return `${this.MONTHS[this.month - 1].name} ${this.day}th, ${this.year}`
  }

  nextDay () {
    // If it's February and a leap year:
    if (this.isLeapYear() && this.month === 2) {
      if (this.day === 29) {
        this.day = 1
        this.month += 1
      } else {
        this.day += 1
      }
      // If it's the end of December:
    } else if (this.month === 12 && this.day === 31) {
      this.day = 1
      this.month = 1
      this.year += 1
      // Otherwise increment based on whether at the end of the month or not:
    } else if (this.day === this.MONTHS[this.month - 1].days) {
      this.day = 1
      this.month += 1
    } else {
      this.day += 1
    }
    // Return the updated date, to allow chaining methods:
    return this
  }
}

module.exports = YearDate
