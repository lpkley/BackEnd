const dicionario = require('./dicionario.js');

let palavra = process.argv[2];
let traducao = dicionario[palavra];

if(palavra === 'listar-tudo'){
    console.log(dicionario);
} else if (traducao === undefined){
    console.log('Não tem essa palavra, pô !');
} else {
    console.log(tradução);
}


