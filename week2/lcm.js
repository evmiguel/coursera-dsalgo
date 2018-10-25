'use strict'

const readline = require('readline')
var BigNumber = require('big-number');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on('line', main)

function main(line) {
  let n1, n2

  n1 = parseInt(line.toString().split(' ')[0])
  n2 = parseInt(line.toString().split(' ')[1])

  let leastCommonMultiple = lcm(n1, n2)
  console.log(leastCommonMultiple)
  process.exit()
}


const gcd = (n1, n2) => {
  if (n2 === 0) {
    return n1;
  }

  let rem = n1 % n2

  return gcd(n2, rem)
}

const lcm = (n1, n2) => {
  // LCM = (a*b) / gcd

  let greatestCommonDivisor = gcd(n1,n2)

  let n = BigNumber(n1).divide(greatestCommonDivisor).multiply(n2)
  return n.number.reverse().join('')
}