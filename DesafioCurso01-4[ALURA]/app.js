// Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
console.log("Bem-vindo(a) ao meu programa!");

// Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
// Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
let nome = "Kelvin";
console.log(`Olá, ${nome}!`);
alert(`Olá, ${nome}!`);

// Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
let linguagem = prompt("Qual a linguagem de programação que você mais gosta?");
console.log(`Você gosta de ${linguagem}!`);

// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
let valor1 = 15;
let valor2 = 4;
let soma = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${soma}.`);
let subtracao = valor1 - valor2;
console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${subtracao}.`);

// Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
let idade = parseInt(prompt("Qual é a sua idade?"));
if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}

// Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
let numero = parseInt(prompt("Digite um número:"));
if (numero > 0) {
  console.log("O número é positivo.");
} else if (numero < 0) {
  console.log("O número é negativo.");
} else {
  console.log("O número é zero.");
}

// Use um loop while para imprimir os números de 1 a 10 no console.
let contador = 1;
while (contador <= 10) {
  console.log(contador);
  contador++;
}

// Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
let nota = 7; // Substitua por um valor de nota
if (nota >= 7) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}

// Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
let numeroAleatorio = Math.random();
console.log(numeroAleatorio);

// Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
let numeroAleatorio_de_1_10 = Math.floor(Math.random() * 10) + 1;
console.log(numeroAleatorio_de_1_10);

// Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
let numeroAleatorio_de_1_1000 = Math.floor(Math.random() * 1000) + 1;
console.log(numeroAleatorio_de_1_1000);
