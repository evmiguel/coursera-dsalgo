const readline = require('readline');

process.stdin.setEncoding('utf8');
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

function readLine(line) {
  if (line !== "\n") {
    let money = parseInt(line);
    let denominations = [1, 3, 4]

    let change = dpChange(money, denominations)
    console.log(change)
    process.exit()
    return money
  }
}

function dpChange(money, coins) {
	let change = 0
	if (money === 0) return change
	console.log(money, coins)
	return coins.reduce((a, v) => a+v)
}