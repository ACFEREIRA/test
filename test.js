//1) Valor da variável SOMA ao final do processamento:
let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K;
}

console.log(SOMA);

//2) Verificar se um número pertence à sequência de Fibonacci:
function pertenceAFibonacci(numero) {
  let a = 0;
  let b = 1;

  if (numero === 0 || numero === 1) {
    return true;
  }

  let proximo = a + b;

  while (proximo <= numero) {
    if (proximo === numero) {
      return true;
    }

    a = b;
    b = proximo;
    proximo = a + b;
  }

  return false;
}

let numero = 21;  //Podemos mudar esse valor para testar outros números
if (pertenceAFibonacci(numero)) {
  console.log("O número " + numero + " pertence à sequência de Fibonacci.");
} else {
  console.log("O número " + numero + " não pertence à sequência de Fibonacci.");
}


//3) Cálculo de faturamento diário:
let faturamentoDiario = [1000, 2000, 0, 500, 1500, 0, 0, 2500, 3000];
let total = 0;
let diasComFaturamento = 0;
let menor = faturamentoDiario[0];
let maior = faturamentoDiario[0];

faturamentoDiario.forEach(valor => {
  if (valor > 0) {
    total += valor;
    diasComFaturamento++;
    if (valor < menor) menor = valor;
    if (valor > maior) maior = valor;
  }
});

let mediaMensal = total / diasComFaturamento;
let diasAcimaDaMedia = faturamentoDiario.filter(valor => valor > mediaMensal).length;

console.log("Menor valor de faturamento: " + menor);
console.log("Maior valor de faturamento: " + maior);
console.log("Número de dias acima da média: " + diasAcimaDaMedia);

//4) Percentual de faturamento por estado:
let faturamentoMensal = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53
};

let totalMensal = 0;

// Calcula o faturamento total
for (let estado in faturamentoMensal) {
  totalMensal += faturamentoMensal[estado];
}

// Calcula e exibe o percentual de cada estado
for (let estado in faturamentoMensal) {
  let percentual = (faturamentoMensal[estado] / totalMensal) * 100;
  console.log(estado + ": " + percentual.toFixed(2) + "%");
}

//5) Inverter os caracteres de uma string:
function inverterString(texto) {
  let textoInvertido = "";

  for (let i = texto.length - 1; i >= 0; i--) {
    textoInvertido += texto[i];
  }

  return textoInvertido;
}

let texto = "Exemplo";  //Podemos mudar esse valor para testar outras strings
console.log(inverterString(texto));
