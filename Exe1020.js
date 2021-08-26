var input = require('fs').readFileSync('./Estudos.URI/dev/stdin/test.txt', 'utf8');

let dias = input
let meses = [365, 30, 1]
let resultado = [] //formato: ano(s) / mes(es) / dia(s)

for (let dia of meses) {
    let qtds = parseInt(dias / dia)
    resultado.push(qtds)
    dias = dias % dia
}

console.log(`${resultado[0]} ano(s)`)
console.log(`${resultado[1]} mes(es)`)
console.log(`${resultado[2]} dia(s)`)