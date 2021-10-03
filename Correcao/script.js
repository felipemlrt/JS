//Quais afirmacoes a seguir sao verdadeiras?
//a) a expressão (a != 3 || b < 10 || c == 5) terá resultado falso.
//b) a expressão (d > 8 && c == 3 || a >= 10) terá resultado verdadeiro.
//c) a expressão (d == 12 && a != 10) terá resultado falso.
//d) expressão (c == 4 || d <=6) && (a >= 5 && b !=9) || ( ! (a < 5) ) terá resultado falso.
//e) expressão (a == 3 || b > 10 || d == 8 ) terá resultado verdadeiro.

//verificando:
//testing:
//declaracao das variaveis e atribuicao dos valores apropriados
a =5, b=7, c=3,d=9

//a) expressão: (a != 3 || b < 10 || c == 5) é falso.
document.write((a != 3 || b < 10 || c == 5),"<br>")

//b) expressão: (d > 8 && c == 3 || a >= 10) é verdadeiro.
document.write((d > 8 && c == 3 || a >= 10),"<br>")

//c) expressão: (d == 12 && a != 10) é falso.
document.write(!(d == 12 && a != 10),"<br>")

//d) a expressão: (c == 4 || d <=6) && (a >= 5 && b !=9) || ( ! (a < 5) ) é falso.
document.write((c == 4 || d <=6) && (a >= 5 && b !=9) || ( ! (a < 5) ),"<br>")

//e) a expressão: (a == 3 || b > 10 || d == 8 ) é verdadeiro.
document.write((a == 3 || b > 10 || d == 8 ),"<br>")
