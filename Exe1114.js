var input = require('fs').readFileSync('./dev/stdin/test.txt', 'utf8');
var lines = input.split('\r\n')

let valor = 0

while (valor != 2002) {
    valor = parseInt(lines.shift())
    if (valor == 2002) {
        console.log('Acesso Permitido')
    } else {
        console.log('Senha Invalida')
    }
}