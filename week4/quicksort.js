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
    let sorted = quicksort(array, 0, array.length - 1)
    console.log(sorted.join(' '))
    process.exit()
  }
}

function quicksort(array, l, r){
  if (l >= r){
    return array
  }
  let k = Math.floor(Math.random() * (r - l + 1)) + l
  swap(array, l, k)
  const [m1, m2] = partition3(array, l, r)
  quicksort(array, l, m1)
  quicksort(array, m2,r)
  return array
}

function partition3(array, l, r){
  let lt = l
  let gt = r
  let i = l
  let comp = array[l]
  while(i <= gt) {
    if (array[i] < comp){
      swap(array, lt++, i++)
    } else if (array[i] > comp) {
      swap(array, i, gt--)
    } else {
      i++
    }
  }
  return [lt-1, gt+1]
}

function swap(array, a, b){
  let temp = array[a]
  array[a] = array[b]
  array[b] = temp
}
