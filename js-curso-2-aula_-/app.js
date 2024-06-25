
// var titulo = document.querySelector('h1')
// titulo.innerHTML=('Jogo do <br> Número Secreto')

// var paragrafo = document.querySelector('p')
// paragrafo.innerHTML=('Escolha entre 0 a 10')

var listaDeNumero = [];
var numeroLimite = 10;
var numSecreto = NumeroAleatorio();
var tentativas = 1;


function ExibirNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    //responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate: 1.1})
}

function MensagemInicial(){
    ExibirNaTela ('h1', 'Jogo do <br> Número Secreto')
    ExibirNaTela ('p', `Escolha entre 0 a ${numeroLimite}`)

}

    MensagemInicial()


function verificarChute(){
    var chute = document.querySelector('input').value;
    var portugues = tentativas > 1 ? 'tentativas' : 'tentativa';
    var mensagemTentativa = (`Muito bem! Você acertou Com ${tentativas} ${portugues}!`);

    if (chute ==numSecreto){
        ExibirNaTela ('h1','Arrasou')
        ExibirNaTela ('p', mensagemTentativa )
        document.getElementById('reiniciar').removeAttribute('disabled')
    }
    else{
        if(chute < numSecreto){
            ExibirNaTela('p','O número secreto é maior')
        }
        else{
            ExibirNaTela('p', 'O número secreto é menor')
        }
        tentativas++
        
        LimparCampo ();

    }
}

function NumeroAleatorio() {
    var numeroEscolhido = parseInt(Math.random () * numeroLimite + 1);
    var QuantidadeElementos = listaDeNumero.length;
    if (QuantidadeElementos == numeroLimite){
        listaDeNumero = [];
    }
    if (listaDeNumero.includes(numeroEscolhido)){
        return NumeroAleatorio();
    } else {
        listaDeNumero.push(numeroEscolhido)
        console.log(listaDeNumero)
        return numeroEscolhido;
    }
    
}

function LimparCampo (){
    chute = document.querySelector('input');
    chute.value = '';
}

function ReiniciarJogo(){
    numSecreto = NumeroAleatorio();
    LimparCampo();
    tentativas = 1
    MensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true) // Isso é para o botão novo jogo somente aparecer quando a pessoa descobrir o número secreto 
}
