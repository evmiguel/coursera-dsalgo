'use strict'

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on('line', main)

function main(line) {
  let n = parseInt(line)
  let fibN = fibonacci(n)
  console.log(fibN)
  process.exit()
}

const fibonacci = (n) => {
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  let fibArr = []
  fibArr[0] = 0
  fibArr[1] = 1

 Array(n-2).fill()  // remaining indices
     .map((_, k) => (2+k))      // start indices from index 2 to n
     .map(k => (fibArr[k] = (fibArr[k-1] + fibArr[k-2]) % 10))  // store new value's last in fibArr

  return (fibArr[n-1] + fibArr[n-2]) >= 10 ? (fibArr[n-1] + fibArr[n-2]) % 10 : (fibArr[n-1] + fibArr[n-2])
}