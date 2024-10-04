// Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

let diaDaSemanaAtual = prompt("Digite o dia da semana atual. \n(Segunda, Terça, Quarta, Quinta ou Sexta)").replace(/^\w/, (primeiraLetra) => primeiraLetra.toUpperCase());
if (diaDaSemanaAtual === "Sabádo" || diaDaSemanaAtual === "Domingo") {
    alert("Bom fim de semana!")
} else {
    alert("Boa semana!")
}

// Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

let numero = Number(prompt("Digite um número positivo ou negativo"));

if (numero >= 0) {
    alert(`O ${numero} é positivo`)
} else {
    alert(`O ${numero} é negativo`)
}

// Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

let pontuacao = 80;

if (pontuacao >= 100) {
    console.log("Parabéns, você venceu!");
} else {
    console.log("Tente novamente para ganhar.");
}

// Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

let saldo = 1500.50;
let mensagem = `Seu saldo atual é de R$${saldo.toFixed(2)}.`;
console.log(mensagem);


// Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

let nome = prompt("Por favor, insira seu nome:");
alert(`Olá, ${nome}! Bem-vindo!`);
