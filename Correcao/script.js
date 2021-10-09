//Quais afirmacoes a seguir sao verdadeiras?
//Wich of the following are true?
//a) a expressão (a != 3 || b < 10 || c == 5) terá resultado falso.
//a) the expression (a != 3 || b < 10 || c == 5) will have a result of false.
//b) a expressão (d > 8 && c == 3 || a >= 10) terá resultado verdadeiro.
//b) the expression (d > 8 && c == 3 || a >= 10)
//c) a expressão (d == 12 && a != 10) terá resultado falso.
//c) the expression (d == 12 && a != 10)
//d) a expressão (c == 4 || d <=6) && (a >= 5 && b !=9) || ( ! (a < 5) ) terá resultado falso.
//d) the expression (c == 4 || d <=6) && (a >= 5 && b !=9) || ( ! (a < 5) )
//e) a expressão (a == 3 || b > 10 || d == 8 ) terá resultado verdadeiro.
//e) the expression

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
