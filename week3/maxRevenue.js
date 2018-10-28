'use strict'

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on('line', main)

let n, a, b

function main(line) {
  if (!n) {
    n = parseInt(line)
    return
  }

  if (!a) {
    a = line.split(" ").map(l => parseInt(l))
    return
  }

  if (!b) {
    b = line.split(" ").map(l => parseInt(l))
  }


  if (n && a.length === n && b.length === n) {

    let sortFn = (a, b) => (b - a)

  	// sort in arrays in descending order
  	a = a.sort(sortFn)
    b = b.sort(sortFn)

    let maxRev = Array(n).fill().map((_, k) => a[k]*b[k]).reduce((acc, val) => acc+val)
    console.log(maxRev)

    process.exit()
  }
}

