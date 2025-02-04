alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 50;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1); // Math.random ele cria numeros aleatorios de entre 0 (inclusive) e 1 (exclusive)  com 16 casas decimais,
//  parseInt é usado para mostrar a somente a parte INTEIRA, 
// por isso multiplicamos por 100 para termos numero entre 0 e 99 como queremos numeros de 1 a 100 somamos 1.
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto o chute não for igual ao numeroSecreto (while = enquanto {CRIAR CONDIÇÃO})
while (chute != numeroSecreto)  { 
    chute = prompt(`Escolha um numero entre 1 e ${numeroMaximo}`);
    // se chute for igual ao numero secreto ( if = se {CRIAR CONDIÇÃO} ) ou ( else= se não )
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) { 
          alert(`O número secreto é menor que ${chute}`);
        } else {
           alert(`O número secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++;
        console.log(`Numero de tentativas atuais ${tentativas}`)
    }
}
/*if (tentativas > 1){
    alert(`Isso aí! você descobriu o número secreto ${numeroSecreto} como ${tentativas} tentativas`);
} else {
    alert(`Isso aí! você descobriu o número secreto ${numeroSecreto} como ${tentativas} tentativa`);
}
Abaixo é um OPERADOR TERNÁRIO uma forma mais curta de escreve o cod acima.
COMO SE LER  criar variavel plavraTentativa é igual a ( tentativas é maior que 1 ? , caso tentativas seja maior que 1 alert(tentativas) , caso não alert(tentativa))
*/

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! você descobriu o número secreto ${numeroSecreto} como ${tentativas} ${palavraTentativa}`);