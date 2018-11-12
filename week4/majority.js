'use strict'

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on('line', main)

let n, array

function main(line) {
  if (typeof n === 'undefined') {
    n = parseInt(line)
    return
  }

  if (typeof array === 'undefined') {
    array = line.split(' ').map(n => parseInt(n))
  }

  if (typeof n === 'number' && typeof array === 'object') {
    let major = n > 0 ? majority(n, array.sort((a,b)=> a-b), {}) : 0
    console.log(major)
    process.exit()
  }
}

function majority(n, array, countMap){
  if (array.length === 0) {
    return 0
  }

  if (array.length === 1) {
    if (array[0] in countMap) {
      countMap[array[0]]++
    } else {
      countMap[array[0]] = 1
    }
    return 1
  }

  let majorityNum = Math.floor(n/2)
  majority(array.slice(0, majorityNum).length, array.slice(0, majorityNum), countMap)
  majority(array.slice(majorityNum, array.length).length, array.slice(majorityNum, array.length), countMap)

  let majNum = Object.keys(countMap).filter(i => countMap[i] > majorityNum)
  return majNum.length > 0 ? 1 : 0
}
