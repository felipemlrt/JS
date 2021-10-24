//1) Crie um código que gere a sequencia de fibonacci
//1 1 2 3 5 8 13 21 34 exemplo de sequencia, no caso com 7 repetições
// function fibonacci(limite_de_repeticoes) {
//   var anterior_1 = 1, anterior_2 = 1;
//   document.write(anterior_1, " ", anterior_2, " ");
//   for (i = 0; i < limite_de_repeticoes; i++) {
//     atual = anterior_1 + anterior_2;
//     document.write(atual, " ");
//     anterior_2 = anterior_1;
//     anterior_1 = atual;
//   }
// }

// repeticoes = prompt("Quantas repeticoes da sequencia?")
// fibonacci(repeticoes)

//2) Faça uma função que verifique se os 3 valores medidos estao a menos de 10% da media dentre eles

function media(valor_1, valor_2, valor_3){
  var resultado = 0;
  resultado = valor_3 + valor_2 + valor_1;
  resultado /= 3;
  return resultado;
}

function derivacao_media(valor, media){
  if ( valor >= (media * 1.10) || valor <= (media * 0.90))
    return true;
  else
    return false;
}

function testa_3_sensores(sensor_1, sensor_2, sensor_3){
  var resultado_media = media(sensor_1, sensor_2, sensor_3);
  if(derivacao_media(sensor_1, resultado_media))
    return true;
  else if(derivacao_media(sensor_2, resultado_media))
    return true;
  else if(derivacao_media(sensor_3, resultado_media))
    return true;
  else
    return false;
}

var sensor_1=35, sensor_2=33, sensor_3=55;
if (testa_3_sensores(sensor_1, sensor_2, sensor_3))
  document.write("ALARME: Dados de entrada nao sao compativeis")
else
  document.write("Operação normal")











