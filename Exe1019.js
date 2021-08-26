var input = require('fs').readFileSync('./Estudos.URI/dev/stdin/test.txt', 'utf8');

let valor = parseInt(input)
let tempos = [3600, 60, 1]
let resultado = []

for (let temp of tempos) {
    let qtdHoras = parseInt(valor / temp)
    resultado.push(qtdHoras)
    valor = valor % temp
}

console.log(`${resultado[0]}:${resultado[1]}:${resultado[2]}`)