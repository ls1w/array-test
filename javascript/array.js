'use strict';


let nomes = [
    "Marie Curie",
    "Albert Einstein",
    "Ada Lovelace",
    "Charles Darwin",
    "Margaret Hamilton",
    "Stephen Hawking",
    "Katherine Johnson",
    "Nikola Tesla",
    "Mary Jackson",
    "Isaac Newton",
    "Dorothy Vaughan",
];

// EXIBE O CONTEUDO DO ARRAY    
console.log('EXIBE OS VALORES DOS ITENS NO ARRAY: ');
console.log(nomes);


// CONTA A QUANTIDADE DE ITENS NO ARRAY
console.log('');
console.log('EXIBE A QUANTIDADE DE ITENS DO ARRAY: ');
console.log(nomes.length);


// ADICIONA UM ITEM NO INICIO DO ARRAY
console.log('');
console.log('ADICIONA UM ITEM NO INICIO/TOPO DO ARRAY: ');
nomes.unshift('TESTE DE ADICÇÃO NO INICIO/TOPO');
console.log(nomes);



// ADICIONAR UM ITEM DO FINAL DO ARRAY
console.log('');
console.log('ADICIONA UM ITEM NO FINAL DO ARRAY: ');
nomes.push('TESTE DE ADICÇÃO NO FINAL');
console.log(nomes);


// REMOVE UM ITEM NO INICIO DO ARRAY
console.log('');
console.log('REMOVE UM ITEM NO INICIO/TOPO DO ARRAY: ');
nomes.shift();
console.log(nomes);


// REMOVE UM ITEM NO FINAL DO ARRAY
console.log('');
console.log('REMOVE UM ITEM NO FINAL DO ARRAY: ');
nomes.pop();
console.log(nomes);








// CONTA A QUANTIDADE DE NOMES DO ARRAY

function contarNomes() {
    document.getElementById('total-nomes').innerHTML = nomes.length;
};


// LISTAGEM DOS NOMES

function listarNomes() {
    // contarNomes();

    let listaDeNomes = '';
    for (let index = 0; index < nomes.length; index++) {
        listaDeNomes += '<div>' + nomes[index] + '</div>';
    };
    document.getElementById('lista-nomes').innerHTML = listaDeNomes;
};


function removerPrimeiroNome() {
    nomes.shift();
    contarNomes();
    listarNomes();
}