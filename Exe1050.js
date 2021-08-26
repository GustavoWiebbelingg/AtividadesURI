var input = require('fs').readFileSync('./Estudos.URI/dev/stdin/test.txt', 'utf8');

let valor = parseInt(input)

if (valor === 61) {
    console.log('Brasilia')
} else if (valor === 71) {
    console.log('Salvador')
} else if (valor === 11) {
    console.log('Sao Paulo')
} else if (valor === 21) {
    console.log('Rio de Janeiro')
} else if (valor === 32) {
    console.log('Juiz de Fora')
} else if (valor === 19) {
    console.log('Campinas')
} else if (valor === 27) {
    console.log('Vitoria')
} else if (valor === 31) {
    console.log('Belo Horizonte')
} else {
    console.log('DDD nao cadastrado')
}