'use strict'

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on('line', main)

let n
let args = []

function main(line) {
  if (!n) {
    n = parseInt(line)
    return
  }

  args = line.split(" ").map(l => parseInt(l))

  if (n && args.length === n) {

    let largestNum = largestNumber(args.sort((a, b) => b-a))
    console.log(largestNum)

    process.exit()
  }
}

function largestNumber(nums) {
  let answer = ''
  while (nums.length !== 0) {
    let maxDigit = Number.NEGATIVE_INFINITY
    for (let n of nums) {
      if (isGreaterOrEqual(n, maxDigit)) {
        maxDigit = n
      }
    }
    answer = answer + maxDigit.toString()
    nums.splice(nums.indexOf(maxDigit), 1)
  }
  return answer
}

function isGreaterOrEqual(n1, n2) {
  if (n1 === Number.NEGATIVE_INFINITY) {
    return n2 > n1
  }

  if (n2 === Number.NEGATIVE_INFINITY) {
    return n1 > n2
  }

  let n1Digits = digits_count(n1)
  let n2Digits = digits_count(n2)

  if (n1Digits !== n2Digits) {
    let nMap = {
      [n1Digits]: n1,
      [n2Digits]: n2
    }

    let maxDigits = Math.max(n1Digits, n2Digits)
    let minDigits = Math.min(n1Digits, n2Digits)

    let sum1 = nMap[minDigits] * Math.pow(10, maxDigits) + nMap[maxDigits]
    let sum2 = nMap[maxDigits] * Math.pow(10, minDigits) + nMap[minDigits]

    return sum1 > sum2
  }

  return n1 > n2
}

function digits_count(n) {
  var count = 0;
  if (n >= 1) ++count;

  while (n / 10 >= 1) {
    n /= 10;
    ++count;
  }

  return count;
}

