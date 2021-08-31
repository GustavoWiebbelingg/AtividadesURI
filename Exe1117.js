var input = require('fs').readFileSync('./dev/stdin/test.txt', 'utf8');
var lines = input.split('\r\n')

let valor = 0
let count = 0
let soma = 0
let validacao = true

while (validacao) {

    while (count != 2) {
        valor = parseFloat(lines.shift())

        if (valor >= 0 && valor <= 10) {
            soma = soma + valor

            count++
    
        } else {
            console.log('nota invalida')
        } 

        if (count == 2) {
            console.log(`media = ${(soma / 2).toFixed(2)}`)
            soma = 0
            count = 0
            break
        }

    }
    
    console.log('novo calculo (1-sim 2-nao)')
    valor = parseInt(lines.shift())

    while (valor != 1 && valor != 2) {
        console.log('novo calculo (1-sim 2-nao)')
        valor = parseInt(lines.shift())        
    }

        if (valor == 1){
            validacao = true
            
        } else if (valor == 2){
            validacao = false
        }

}