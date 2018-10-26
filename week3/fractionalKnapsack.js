'use strict'

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on('line', main)

let n, weight
let args = []

function main(line) {
  if (!n) {
    n = parseInt(line.split(" ")[0])
    weight = parseInt(line.split(" ")[1])
    return
  }

  args.push(line)

  if (n && weight && args.length === n) {
  	let objs = []
  	args.map(a => a.split(" ")).map(pair => {
  		objs.push({
  			value: pair[0],
  			weight: pair[1],
  			prop: pair[0]/pair[1]
  		})
  	})

  	// sort in descending order based on the value by weight proportion
  	objs = objs.sort((a,b) => b.prop - a.prop)

  	let knapsack = createKnapsack(n, weight, objs)

  	console.log(knapsack)
    process.exit()
  }
}

function createKnapsack(nItems, maxWeight, items) {
	let value = 0
	for (let i=0; i<n; i++) {
		if (maxWeight === 0) {
			return value.toFixed(4)
		}
		let a = Math.min(items[i].weight, maxWeight)
		value = value + a*items[i].prop
		items[i].weight -= a
		maxWeight -= a
	}

	return value.toFixed(4)
}