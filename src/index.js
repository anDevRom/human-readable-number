module.exports = function toReadable (num) {
    const numbers = [
        ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"],
        ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"],
        "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"
      ]
    
      let result = ""
    
      if (num >= 100) {
        result = result + numbers[0][Math.floor(num / 100)] + " hundred " + getUntil99(num - (Math.floor(num / 100) * 100))
      } else {
        result = result + getUntil99(num)
      }
    
      function getUntil99(num) {
        if (num < 10) {
          result = result + numbers[0][num]
        } else if (num >= 10 && num < 20) {
          result = result + numbers[1][num - 10]
        } else {
          result = result + numbers[Math.floor(num / 10)] + " " + numbers[0][num % ((Math.floor(num / 10)) * 10)]
        }
    
        return result
      }

      if (num > 0 && result.includes(" zero")) {
          result = result.split(" zero").join("")
      }

      return result
}
