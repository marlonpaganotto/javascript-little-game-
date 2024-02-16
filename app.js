
alert('Bem vindo ao jogo do número secreto!')

let qtdnumeros = prompt('Digite com quantos numeros iremos jogar: ')
let numeroSecreto = parseInt(Math.random() * qtdnumeros + 1);
console.log(numeroSecreto)

let valor;
console.log(numeroSecreto);

let tentativas = 1
while (valor != numeroSecreto){
    valor = prompt(`Escolha um número entre 1 e ${qtdnumeros}`);
    
    if (numeroSecreto == valor ){
        break;
        
    }
    else{
         if( numeroSecreto > valor){
            alert(`O numero é maior que ${valor}`);
        }
        else{
            alert(`O numero  é menor que ${valor}`);
        }
    }
    tentativas++;
} 

let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`)

