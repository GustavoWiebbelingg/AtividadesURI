var input = require('fs').readFileSync('./dev/stdin/test.txt', 'utf8');
var lines = input.split('\r\n');

let count = 0
let valores = 0
let sequencia = []
let soma = 0

while (lines.length) {
    valores = lines.shift().split(' ')

    if (parseInt(valores[0]) > 0 && parseInt(valores[1]) > 0) {

        if (parseInt(valores[0]) <= parseInt(valores[1])) {
            
            while (parseInt(valores[0]) <= parseInt(valores[1])) {
                sequencia.push(parseInt(valores[0]))
                soma = soma + parseInt(valores[0])
                parseInt(valores[0]++)
            }

        } else {

            while (parseInt(valores[1]) <= parseInt(valores[0])) {
                sequencia.push(parseInt(valores[1]))
                soma = soma + parseInt(valores[1])
                parseInt(valores[1]++)
            }
        }
        console.log(`${sequencia.join(' ')} Sum=${soma}`)
        sequencia = []
        soma = 0
    }
}