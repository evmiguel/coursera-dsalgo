'use strict'

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on('line', main)

let q1, q2

function main(line) {
  if (!q1) {
    q1 = line
    return
  }

  if (!q2) {
    q2 = line
  }

  if (q1 && q2) {
    let maxProduct = maxPairwise(q2.split(' ').map(n => parseInt(n)))
    console.log(maxProduct)
    process.exit()
  }
}


const maxPairwise = function(arr) {
  let sorted = arr.sort((a,b) => a-b)
  return sorted[sorted.length-1] * sorted[sorted.length-2]
}