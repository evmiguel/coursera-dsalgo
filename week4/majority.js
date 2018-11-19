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
    let major = n > 0 ? majority(array.sort((a,b)=> a-b), 0) : 0
    console.log(major)
    process.exit()
  }
}

function majority(array, index){
  if (index === array.length) {
    return 0
  }

  let majorNumber = -Number.MAX_VALUE
  let majorCount = 0

  //go through multiple elements that are repeated
  for (index; index < array.length; index++) {
    if(array[index] > majorNumber) {
      majorNumber = array[index]
      majorCount = 1
    } else if(array[index] === majorNumber){
      majorCount++
    }

    if (majorCount/array.length > .5) {
      return 1
    }
  }

  return majority(array, index)
}
