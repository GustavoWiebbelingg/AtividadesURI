var input = require('fs').readFileSync('./dev/stdin/test.txt', 'utf8');
var lines = input.split('\r\n')

let valores = 0

while (lines.length) {
    valores = lines.shift().split(' ')

    if (parseInt(valores[0]) == 0 || parseInt(valores[1]) == 0) {
    
    } else if (parseInt(valores[0]) > 0 && parseInt(valores[1]) > 0) {
        console.log('primeiro')
    
    } else if (parseInt(valores[0]) < 0 && parseInt(valores[1]) > 0) {
        console.log('segundo')
    } else if (parseInt(valores[0]) < 0 && parseInt(valores[1]) < 0) {
        console.log('terceiro')

    } else if (parseInt(valores[0]) > 0 && parseInt(valores[1]) < 0) {
        console.log('quarto')
    }
}