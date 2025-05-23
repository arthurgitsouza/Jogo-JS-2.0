let listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
let titulo = document.querySelector('h1');

function exibirMensagemInicial(){
    console.log(listaDeNumerosSorteados);
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function gerarNumeroAleatorio(){
    numeroEscolhido = parseInt(Math.random() * 10 + 1);
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo(){
    document.querySelector('input').value = ''
}

function finalizarJogo(){
    limparCampo()
    document.getElementById('reiniciar').removeAttribute('disabled') // A função getElementById busca no HTML por um ID referênciado e a função removeAttribute remove o atributo relacionado a aquele id.
    document.getElementById('chute').setAttribute('disabled', true);
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio()
    limparCampo()
    tentativas = 1
    exibirMensagemInicial()
    document.getElementById('chute').removeAttribute('disabled');
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

exibirMensagemInicial()

function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Parabéns, você acertou!');
        let mensagemTentativas = tentativas > 1? 'tentativas' : 'tentativa';
        exibirTextoNaTela('p', `Você descobriu o número secreto com ${tentativas} ${mensagemTentativas}`);
        finalizarJogo()
    } else if (chute > numeroSecreto){
        exibirTextoNaTela('p', `O número secreto é menor que ${chute}!`);
    } else {
        exibirTextoNaTela('p', `O número secreto é maior que ${chute}!`);
    }
    tentativas++;
    limparCampo()
}
