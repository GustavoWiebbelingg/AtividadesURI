var input = require('fs').readFileSync('./Estudos.URI/dev/stdin/test.txt', 'utf8');
var lines = input.split(' ');

let hI = parseInt(lines.shift())
let mI = parseInt(lines.shift())
let hF = parseInt(lines.shift())
let mF = parseInt(lines.shift())

if (hI === hF && mI === mF) {
    console.log('O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)')

} else if (hI < hF) {
    
    if (mI < mF) {
        console.log(`O JOGO DUROU ${hF - hI} HORA(S) E ${mF - mI} MINUTO(S)`)
    } else {
        console.log(`O JOGO DUROU ${(hF - hI) - 1} HORA(S) E ${(60 - mI) + mF} MINUTO(S)`)
    }

} else if (hI > hF){
    
    if (mI < mF) {
        console.log(`O JOGO DUROU ${(24 - hI) + hF} HORA(S) E ${mF - mI} MINUTO(S)`)       
    } else {
        console.log(`O JOGO DUROU ${((24 - hI) + hF) - 1} HORA(S) E ${(60 - mI) + mF} MINUTO(S)`)
    }

} else if (hI === hF) {

    if (mI < mF){
        console.log(`O JOGO DUROU 0 HORA(S) E ${mF - mI} MINUTO(S)`)
    } else {
        console.log(`O JOGO DUROU 23 HORA(S) E ${(60 - mI) + mF} MINUTO(S)`)    
    }

}