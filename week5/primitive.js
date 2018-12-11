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
  if (n === 1) {
    return {
      steps: 0,
      intermediate: [1]
    }
  }
  let hops = [0]
  hops[1] = 1

  for(let i = 2; i <= n; i++){
    let indices = [i-1]
    if (i % 2 === 0){
      indices.push(i/2)
    }
    if (i % 3 === 0){
      indices.push(i/3)
    }

    minHops = Math.min(...indices)
    hops[i] = minHops + 1
  }

  let ptr = n
  let optimal = [ptr]

  while (ptr != 1){
    let candidates = [ptr -1]
    if (ptr % 2 === 0){
      candidates.push(ptr / 2)
    }
    if (ptr % 3 === 0){
      candidates.push(ptr / 3)
    }

    let iHop = candidates.map(c => [c, hops[c]])
    let minHop = Math.min(...iHop.map(c => c[1]))
    ptr = iHop.filter(c => c[1] === minHop).pop()[0]
    optimal.push(ptr)
  }

  return {
    steps: optimal.length,
    intermediate: optimal.reverse()
  }

}