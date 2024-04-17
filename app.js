let listaNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

console.log(numeroSecreto);

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
    exibirTextoNaTela('h1', 'Você acertou!');
    
    let palavraTentativas = tentativas > 1 ? 'tentativas!' : 'tentativa!';
    let mensagemTentativas = `Você descobriu o numero secreto em ${tentativas} ${palavraTentativas}`;
    
    exibirTextoNaTela('p', mensagemTentativas);
    
    document.getElementById('reiniciar').removeAttribute('disabled');

    }
    
    else {
        if (chute < numeroSecreto){
            exibirTextoNaTela('p', 'O numero secreto é Maior');
        }
        else {
            exibirTextoNaTela('p', 'O numero secreto é Menor');
        }
        tentativas++
    } 
    limparCampo();
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}



// abaixo apenas as funções.
// retunr foi utilizado para poder ser utilizado como variavel la em cima 
function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantNumerosSorteados = listaNumerosSorteados.length;
   
   if(quantNumerosSorteados == numeroLimite){
    listaNumerosSorteados = [];
   }
   
   if(listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
   } else{
    listaNumerosSorteados.push(numeroEscolhido);
    console.log(listaNumerosSorteados);
    return numeroEscolhido;
   }
}

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto , 'Brazilian Portuguese Female', {rate:1.2});
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do numero secreto');
    exibirTextoNaTela('p', 'Escolha um numero de 1 a ' , numeroLimite);
}