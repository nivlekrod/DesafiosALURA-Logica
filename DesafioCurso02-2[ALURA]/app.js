// Função que exibe "Olá, mundo!" no console
function exibirOlaMundo() {
    console.log("Olá, mundo!");
}

exibirOlaMundo();

// Função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console
function exibirOlaNome(nome) {
    console.log(`Olá, ${nome}!`);
}

exibirOlaNome("João");

// Função que recebe um número como parâmetro e retorna o dobro desse número
function dobrarNumero(numero) {
    return numero * 2;
}

console.log(dobrarNumero(5)); 

// Função que recebe três números como parâmetros e retorna a média deles
function calcularMedia(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}

console.log(calcularMedia(7, 8, 9)); 

// Função que recebe dois números como parâmetros e retorna o maior deles
function maiorNumero(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

console.log(maiorNumero(12, 5)); 

// Função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function quadradoNumero(numero) {
    return numero * numero;
}

console.log(quadradoNumero(6)); 