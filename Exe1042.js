var input = require('fs').readFileSync('./Estudos.URI/dev/stdin/test.txt', 'utf8');
var lines = input.split(' ');

let a = parseInt(lines.shift())
let b = parseInt(lines.shift())
let c = parseInt(lines.shift())


if (a < b && a < c) {
    console.log(a)
    if (b < c) {
        console.log(b)
        console.log(c)
    } else {
        console.log(c)
        console.log(b)
    }

} else if (b < a && b < c) {
    console.log(b)
    if (a < c) {
        console.log(a)
        console.log(c)
    } else {
        console.log(c)
        console.log(a)
    }
    
} else if (c < a && c < b) {
    console.log(c) 
    if (a < b) {
        console.log(a)
        console.log(b)
    } else {
        console.log(b)
        console.log(a)
    }
}

console.log('')
console.log(a)
console.log(b)
console.log(c)



