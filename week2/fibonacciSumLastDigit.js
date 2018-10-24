'use strict'

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on('line', main)

function main(line) {
  let n = parseInt(line)
  let mods = sumFibLastDig(n)
  console.log(mods)
  process.exit()
}

const sumFibLastDig = (n) => {
  return getFibMod(n, 10)
}

/**
* @param n1: the nth Fibonacci number
* @param n2: the number to mod n1 by
*
* @return: integer of n1 % n2
*/
const getFibMod = (n1, n2) => {
  // find pisano of fib(n2)
  let p = pisano(n2)

  // n1 % pisano; map a large value of n to it's remainder in the pisano sequence
  let rem = n1 % p.length

  return Array(rem)
          .fill()
          .map((_,k) => p[k])
          .reduce((acc, val) => acc+val) % 10
}

const pisano = (n) => {
  let arr = []

  let fib1 = 0
  let fib2 = 1

  for(let i = 0; i < n*n; i++) {
    let fibMod = (fib1 + fib2) % n
    arr.push(fibMod)
    fib1 = fib2
    fib2 = fibMod
    if (fib1 === 0 && fib2 === 1){
      // this algorithm starts from the first Fibonacci number, so shift it left.
      arr.pop()
      arr.unshift(1)
      return arr
    }
  }

}


const fibonacci = (n) => {

  if (n <= 1) {
    return 1;
  }

  let fibArr = []
  fibArr[0] = 0
  fibArr[1] = 1

 Array(n-2).fill()  // remaining indices
     .map((_, k) => (2+k))      // start indices from index 2 to n
     .map(k => (fibArr[k] = fibArr[k-1] + fibArr[k-2]))  // store new value in fibArr

  return fibArr[n-1] + fibArr[n-2]
}