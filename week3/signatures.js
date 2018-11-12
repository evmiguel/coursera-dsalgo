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

    let minPoints = getMinPoints(args.sort((a, b) => a[0] - b[0]))

    console.log(minPoints.length)
    console.log(minPoints.join(' '))

    process.exit()
  }
}

function getMinPoints(points) {
  let pts = []
  let pointer = points[0]
  let intersections = []
  let group = []

  group.push(pointer.slice())


  for (let i = 1; i < points.length; i++) {
    let p = points[i]
    if ((p[0] - pointer[1]) <= 0) {
      group.push(p.slice())
      if (i === points.length - 1) {
        intersections.push(group.slice())
      }
    } else {
      pointer = points[i]
      intersections.push(group.slice())
      group = []
      group.push(pointer.slice())
    }
  }

  console.log(intersections)

  for (let group of intersections) {
    if (group.length === 1) {
      pts.push(Math.max(group[0][0], group[0][1]))
    } else {
      let pointer = group[0]
      let min
      for (let i = 1; i < group.length; i++) {
        let p = group[i]
        if ((p[1] - pointer[1]) >= 0) {
          min = pointer[1]
        } else {
          min = p[1]
        }

        pts.push(min)
      }
    }
  }

  return [...new Set(pts)]
}

