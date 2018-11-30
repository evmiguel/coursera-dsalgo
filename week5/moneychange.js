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
	let minCoins = [0]
	if (money === 0) return minCoins[0]

	for (let m = 1; m <= money; m++) {
		minCoins[m] = Number.POSITIVE_INFINITY
		coins.forEach(c => {
			if (m >= c) {
				let numCoins = minCoins[m-c] + 1
				if (numCoins < minCoins[m]) minCoins[m] = numCoins
			}
		})
	}

	return minCoins[money]
}