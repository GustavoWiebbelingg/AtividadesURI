var input = require('fs').readFileSync('./dev/stdin/test.txt', 'utf8');
var lines = input.split('\r\n');

let valores = []
count = 0

while (count < 100) {
    valores.push(parseInt(lines.shift()))
    count++
}

let max = valores.reduce(function(a, b) {
    return Math.max(a, b);
  })

let position = valores.indexOf(max, [0])

console.log(max)
console.log(position + 1)