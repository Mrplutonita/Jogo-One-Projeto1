
let ListaDeNumerosSorteados = [];let numeroLimite = 100;
function gerarNumeroAleatorio() {
let numeroEscolhido = parseInt(Math.random()*numeroLimite+1);
let quantidadeDeElementosLista = ListaDeNumerosSorteados.length;
    if (quantidadeDeElementosLista == numeroLimite) {
        ListaDeNumerosSorteados = [];}
    if(ListaDeNumerosSorteados.includes(numeroEscolhido)){
       return gerarNumeroAleatorio();} else{ListaDeNumerosSorteados.push(numeroEscolhido);
        console.log(ListaDeNumerosSorteados);
        return numeroEscolhido;}} let numeroSecreto = gerarNumeroAleatorio();
function exibirTextoNaTela(tag,texto){
       let paragrafo = document.querySelector(tag);
       paragrafo.innerHTML = texto;
        if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }}
function exibirMensagemInicial() {
    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p',`Escolha um número entre 1 e ${numeroLimite}`);}       
    exibirMensagemInicial();let tentativa = 1;
function verificarChute(){let chute = document.querySelector('input').value;
    let palavraTentativa = tentativa > 1 ?'tentativas':'tentativa';
    let mensagemTentativa = `você acertou com ${tentativa} ${palavraTentativa}!`;
    if(numeroSecreto==chute){
     exibirTextoNaTela('h1','ACERTOU!');exibirTextoNaTela('p',mensagemTentativa);
     document.getElementById('reiniciar').removeAttribute('disabled');
    }  else{
        if (numeroSecreto < chute) {
        exibirTextoNaTela('p','O número secreto é menor');}
        else {exibirTextoNaTela('p','O número secreto é maior');}    
    }tentativa++;limparCampo();} 
function limparCampo() {chute = document.querySelector('input');chute.value ='';}
function reiniciarJogo() {tentativa = 1;
    numeroSecreto = gerarNumeroAleatorio();limparCampo();exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);}

