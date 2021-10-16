//Quais afirmacoes a seguir sao verdadeiras?
//Wich of the following are true?
//a) a expressão (a != 3 || b < 10 || c == 5) terá resultado falso.
//a) the expression (a != 3 || b < 10 || c == 5) will have a result of false.
//b) a expressão (d > 8 && c == 3 || a >= 10) terá resultado verdadeiro.
//b) the expression (d > 8 && c == 3 || a >= 10) will have a result of true.
//c) a expressão (d == 12 && a != 10) terá resultado falso.
//c) the expression (d == 12 && a != 10) will have a result of false.
//d) a expressão (c == 4 || d <=6) && (a >= 5 && b !=9) || ( ! (a < 5) ) terá resultado falso.
//d) the expression (c == 4 || d <=6) && (a >= 5 && b !=9) || ( ! (a < 5) ) will have a result of false.
//e) a expressão (a == 3 || b > 10 || d == 8 ) terá resultado verdadeiro.
//e) the expression (a == 3 || b > 10 || d == 8 ) will have a result of true.

//verificando:
//testing:
//declaracao das variaveis e atribuicao dos valores apropriados
//decalring variables and assigning appropriated values
a =5, b=7, c=3,d=9

//a) expressão: (a != 3 || b < 10 || c == 5) é falso.
//a) the expression (a != 3 || b < 10 || c == 5) will have a result of false.
document.write((a != 3 || b < 10 || c == 5),"<br>")

//b) expressão: (d > 8 && c == 3 || a >= 10) é verdadeiro.
//b) the expression (d > 8 && c == 3 || a >= 10) will have a result of true.
document.write((d > 8 && c == 3 || a >= 10),"<br>")

//c) expressão: (d == 12 && a != 10) é falso.
//c) the expression (d == 12 && a != 10) will have a result of false.
document.write(!(d == 12 && a != 10),"<br>")

//d) a expressão: (c == 4 || d <=6) && (a >= 5 && b !=9) || ( ! (a < 5) ) é falso.
document.write((c == 4 || d <=6) && (a >= 5 && b !=9) || ( ! (a < 5) ),"<br>")

//e) a expressão: (a == 3 || b > 10 || d == 8 ) é verdadeiro.
document.write((a == 3 || b > 10 || d == 8 ),"<br>")
