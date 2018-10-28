'use strict'

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on('line', main)

let n
let args = []

function main(line) {
  if (!n) {
    n = parseInt(line)
    return
  }

  args.push(line.split(" ").map(l => parseInt(l)))

  if (n && args.length === n) {

    let minPoints = getPoints(args.sort((a, b) => a[0] - b[0])
                                      .map(range => Array(range[1] - range[0]  + 1).fill().map((_,k) => k+range[0]))
                                      .map(list => new Set(list)))

    console.log(minPoints.length)
    console.log(minPoints.join(' '))

    process.exit()
  }
}

function getMinPoints(points, intersections) {
  if (points.length <= 1){
    return intersections
  }

  let intersection = [...points[0]].filter(x => points[1].has(x))
  let newPoints = []

  if (intersection.length > 0) {
    intersections.push(intersection)
    newPoints = [intersection, ...points.slice(2)]
  } else {
    intersections.push([...points[0]])
    newPoints = [...points.slice(1)]
  }

  return getMinPoints(newPoints, intersections)
}

function getPoints(points){
  let intersections = getMinPoints(points, [])
  let pureIntersections = getMinPoints(intersections.map(i => new Set(i)),[])

  return [...new Set(pureIntersections.map(p => Math.max(...p)))]
}

