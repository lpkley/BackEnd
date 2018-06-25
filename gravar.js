const fs = require ('fs');

// let escrever_terminal = 'Estou gravando um arquivo';

let escrever_terminal = process.argv[2];

fs.writeFile('gravar.txt', escrever_terminal ,(error) => {
    if (error){
        console.log('Houve um erro ao gravar o arquivo');
    } else {
        console.log('Gravei o arquivo');
    }
});
console.log('Já mandei gravá');