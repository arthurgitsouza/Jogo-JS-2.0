let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
let titulo = document.querySelector('h1');

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1)
}

function limparCampo(){
    document.querySelector('input').value = ''
}

exibirTextoNaTela('h1', 'Jogo do Número Secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Parabéns, você acertou!');
        let mensagemTentativas = tentativas > 1? 'tentativas' : 'tentativa';
        exibirTextoNaTela('p', `Você descobriu o número secreto com ${tentativas} ${mensagemTentativas}`);
    } else if (chute > numeroSecreto){
        exibirTextoNaTela('p', `O número secreto é menor que ${chute}!`);
    } else {
        exibirTextoNaTela('p', `O número secreto é maior que ${chute}!`);
    }
    tentativas++;
    limparCampo()
    document.getElementById('reiniciar').removeAttribute('disabled') // A função getElementById busca no HTML por um ID referênciado e a função removeAttribute remove o atributo relacionado a aquele id.
}
