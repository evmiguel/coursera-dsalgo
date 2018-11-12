'use strict'

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on('line', main)

let sorted, search

function main(line) {
  if (!sorted) {
    sorted = line.split(' ').map(n => parseInt(n)).slice(1)
    return
  }

  if (!search) {
    search = line.split(' ').map(n => parseInt(n)).slice(1)
  }

  if (sorted && search) {
    let positions = search.map(n => binarySearch(n, sorted))
    positions.forEach(index => process.stdout.write(`${index} `));
    process.exit()
  }
}

function binarySearch(n, array){
  let minIndex = 0
  let maxIndex = array.length - 1
  while(minIndex <= maxIndex) {
    let midIdx = Math.floor((minIndex + maxIndex)/2)
    let mid = array[midIdx]
    if (n === mid) {
      return midIdx
    } else if (n > mid) {
      minIndex = midIdx + 1
    } else {
      maxIndex = midIdx - 1
    }
  }

  return -1
}

