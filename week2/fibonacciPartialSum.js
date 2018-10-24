'use strict'

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on('line', main)

function main(line) {
  let n1, n2

  n1 = parseInt(line.toString().split(' ')[0])
  n2 = parseInt(line.toString().split(' ')[1])

  let partial = partialSumFibLastDig(n1, n2)
  console.log(partial)
  process.exit()
}

const partialSumFibLastDig = (n1, n2) => {
  let p = pisano(10)
  let rem1 = n1 % p.length
  let rem2 = n2 % p.length
  let partial = p.slice(rem1-1, rem2)

  return partial.reduce((acc, val)=> acc+val) % 10
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