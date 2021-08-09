function num_divisores(numero){
    var conta_divisores = 0, iterador;
    for (iterador = 1; iterador < numero; iterador++) {
      if (numero % iterador == 0) {
        conta_divisores++;
      }
    }
    return conta_divisores;
}

function e_primo(numero){
    var divisores = num_divisores(numero);
    if(divisores < 2)
        return true
    else
        return false
}

function primos_1_100() {
  var i;
  for (i = 2; i <= 100; i++) {
    if (e_primo(i)) document.write(i, " é PRIMO <br>");
  }
}

primos_1_100();