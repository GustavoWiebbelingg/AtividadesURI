var input = require('fs').readFileSync('./Estudos.URI/dev/stdin/test.txt', 'utf8');

let valor = parseFloat(input)
let notas = [100, 50, 20, 10, 5, 2]
let moedas = [1, 0.50, 0.25, 0.10, 0.05, 0.01]

console.log('NOTAS:')

for (let nota of notas) {
    let qtdNotas = parseInt(valor / nota) 
    console.log(`${qtdNotas} nota(s) de R$ ${nota.toFixed(2)}`)
    valor = valor % nota
}

console.log('MOEDAS:')

for (let moeda of moedas) {
    let qtdMoedas = parseInt(valor / moeda)
    console.log(`${qtdMoedas} moeda(s) de R$ ${moeda.toFixed(2)}`)
    valor = valor % moeda + 0.00001
}