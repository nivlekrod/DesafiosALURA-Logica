// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function calcularIMC(peso, altura) {
  let imc = peso / (altura * altura);
  return imc.toFixed(2);
}

console.log("IMC:", calcularIMC(70, 1.75));

// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function calcularFatorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  }
  let fatorial = 1;
  for (let i = numero; i > 1; i--) {
    fatorial *= i;
  }
  return fatorial;
}

console.log("Fatorial:", calcularFatorial(5));

// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function converterDolarParaReal(dolar) {
  const cotacao = 4.8;
  let valorEmReais = dolar * cotacao;
  return valorEmReais.toFixed(2);
}

console.log("Valor em Reais:", converterDolarParaReal(100));

// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function calcularSalaRetangular(altura, largura) {
  let area = altura * largura;
  let perimetro = 2 * (altura + largura);
  console.log(`Área: ${area} m²`);
  console.log(`Perímetro: ${perimetro} m`);
}

calcularSalaRetangular(5, 8);

// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function calcularSalaCircular(raio) {
  const pi = 3.14;
  let area = pi * raio * raio;
  let perimetro = 2 * pi * raio;
  console.log(`Área: ${area.toFixed(2)} m²`);
  console.log(`Perímetro: ${perimetro.toFixed(2)} m`);
}

calcularSalaCircular(3);

// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function exibirTabuada(numero) {
  console.log(`Tabuada de ${numero}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}

exibirTabuada(7);
