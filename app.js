let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do Número Secreto'

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

function exibirTextoNaTela(campo, tag, texto){
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
}

function verificarChute(){
    console.log('Botão clicado com Sucesso!')
}