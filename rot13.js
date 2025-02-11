function rot13 (string) {
  const original = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const final = 'NOPQRSTUVWXYZABCDEFGHIJKLM'
  const originalLower = original.toLowerCase()
  const finalLower = final.toLowerCase()

  let newString = ''

  for (let i = 0; i < string.length; i++) {
    if (original.includes(string[i])) {
      const index = original.indexOf(string[i])
      newString += final[index]
    } else if (originalLower.includes(string[i])) {
      const index = originalLower.indexOf(string[i])
      newString += finalLower[index]
    } else {
      newString += string[i]
    }
  }

  return newString
}

module.exports = rot13
