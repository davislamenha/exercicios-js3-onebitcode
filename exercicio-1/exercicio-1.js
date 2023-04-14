document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('btn-iniciar').addEventListener('click', function () {
    iniciarPrograma();
  });
});

function iniciarPrograma() {
  let menu = '';
  let numeros = [];
  let resposta = 0;
  do {
    menu = prompt(`
      Qual operação deseja fazer? 
      (Digite o número correspondente a operação desejada)

      1 - Média Aritmética Simples
      2 - Média Aritmética Ponderada
      3 - Mediana
      4 - Moda
      5 - Encerrar
    `);

    switch (menu) {
      case '1':
        numeros = arrayDeNumeros();
        resposta = calcularMAS(...numeros);
        alert(
          `A Média Aritmética Simples dos números que você digitou é ${resposta}.`,
        );
        break;
      case '2':
        alert(
          'Digite os números seguidos do seu peso! Ex: 1, 2, 5, 10 = numero 1 peso 2, numero 5 peso 10.',
        );
        numeros = arrayDeNumeros();
        resposta = calcularMAP(...numeros);
        alert(
          `A Média Aritmética Ponderada dos números que você digitou é ${resposta}.`,
        );
        break;
      case '3':
        numeros = arrayDeNumeros();
        resposta = calcularMediana(...numeros);
        alert(`A Mediana dos números que você digitou é ${resposta}.`);
        break;
      case '4':
        numeros = arrayDeNumeros();
        resposta = calcularModa(...numeros);
        alert(`A Moda dos números que você digitou é ${resposta}.`);
        break;
      case '5':
        break;
      default:
        break;
    }
  } while (menu != '5');
  alert('Programa Encerrado');
}

function arrayDeNumeros() {
  let numeros = prompt(`
  Digite os números separados por virgula:
  Exemplo: 1, 10, 20, 5 
`);

  let arrayDeNumeros = numeros.split(',');

  arrayDeNumeros = arrayDeNumeros.map((numero) => {
    if (numero) {
      numero.trim();
      return +numero;
    }
  });

  arrayDeNumeros = arrayDeNumeros.filter((numero) => numero);

  return arrayDeNumeros;
}

function calcularMAS(...numeros) {
  const calculo =
    numeros.reduce((acumulador, atual) => acumulador + atual, 0) /
    numeros.length;
  return calculo;
}

function calcularMAP(...numeros) {
  let n = 0;
  let p = 0;
  let totalPesos = 0;
  let soma = 0;
  if (verificarNumeroPar(numeros.length)) {
    for (let i = 0; i < numeros.length; i++) {
      if (verificarNumeroPar(i)) {
        n = numeros[i];
      } else {
        p = numeros[i];
        totalPesos += numeros[i];
        soma += n * p;
        n = 0;
        p = 0;
      }
    }
  } else
    alert(
      'Não foi possível realizar o calculo, verifique se colocou os números e seus pesos também!',
    );

  return soma / totalPesos;
}

function calcularMediana(...numeros) {
  let calculo = 0;
  let qtdDeNum = numeros.length;
  if (verificarNumeroPar(qtdDeNum)) {
    const indiceNumeroCentral = qtdDeNum / 2 - 1;
    calculo =
      (numeros[indiceNumeroCentral] + numeros[indiceNumeroCentral + 1]) / 2;
  } else {
    calculo = numeros[Math.floor(qtdDeNum / 2)];
  }
  return calculo;
}

function verificarNumeroPar(n) {
  if (n % 2 === 0) {
    return true;
  } else return false;
}

function calcularModa(...numeros) {
  const ocorrencias = numeros.reduce(function (acumulador, atual) {
    acumulador[atual] = atual in acumulador ? acumulador[atual] + 1 : 1;
    return acumulador;
  }, {});

  let n = 0;
  let resposta = null;

  for (const numero in ocorrencias) {
    if (ocorrencias.hasOwnProperty(numero)) {
      if (ocorrencias[numero] > n) {
        n = ocorrencias[numero];
        resposta = numero;
      }
    }
  }

  return resposta;
}
