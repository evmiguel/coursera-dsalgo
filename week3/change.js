'use strict'

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on('line', main)

function main(line) {
  let n = parseInt(line)
  let change = getChange(n)
  console.log(change)
  process.exit()
}

function getChange(n) {
	let denominations = [10, 5, 1]
	let changeMap = { 10: 0, 5: 0, 1: 0}
	return calculateChange(n, denominations, changeMap)
}

function calculateChange(n, d, c) {
	let denom = d[0]

	if (n === 0) {
		return Object.keys(c).map(k => c[k]).reduce((acc, val) => acc+val)
	}

	if (n >= denom) {
		while(n >= denom) {
			c[denom] = ++c[denom]
			n -= denom
		}
	}

	return calculateChange(n, d.slice(1), c)

}