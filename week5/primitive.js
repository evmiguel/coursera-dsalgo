const readline = require('readline');

process.stdin.setEncoding('utf8');
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

let multiplyBy = function(n, toMultiply) {
  return n * toMultiply
}

let addBy = function(n, toAdd){
  return n + toAdd
}


function readLine(line) {
  if (line !== "\n") {
    let n = parseInt(line);

    let ops = primitive(n)
    console.log(ops.steps)
    console.log(ops.intermediate.join(' '))
    process.exit()
    return ops
  }
}

function primitive(n){
  if (n === 1) { return { steps: 0, intermediate: [1] } }
}