var input = require('fs').readFileSync('./Estudos.URI/dev/stdin/test.txt', 'utf8');
var lines = input.split('\n');

let num = lines.shift().split(' ')
let a = parseFloat(num.shift())
let b = parseFloat(num.shift())
let c = parseFloat(num.shift())
let delta = Math.pow(b, 2) - 4 * a * c

let r1 = (-b - (Math.sqrt(delta))) / 2 * a

console.log()