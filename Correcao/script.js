//Quais afirmacoes a seguir sao verdadeiras?
//axpressão (a != 3 || b < 10 || c == 5) é falso.
//bxpressão (d > 8 && c == 3 || a >= 10) é verdadeiro.
//cxpressão (d == 12 && a != 10) é falso.
//dexpressão (c == 4 || d <=6) && (a >= 5 && b !=9) || ( ! (a < 5) ) é falso.
//e.expressão (a == 3 || b > 10 || d == 8 ) é verdadeiro.

//verificando:
a =5, b=7, c=3,d=9

//a) expressão: (a != 3 || b < 10 || c == 5) é falso.
document.write((a != 3 || b < 10 || c == 5),"<br>")

//b) expressão: (d > 8 && c == 3 || a >= 10) é verdadeiro.
document.write((d > 8 && c == 3 || a >= 10),"<br>")

//c) expressão: (d == 12 && a != 10) é falso.
document.write(!(d == 12 && a != 10),"<br>")
document.write((c == 4 || d <=6) && (a >= 5 && b !=9) || ( ! (a < 5) ),"<br>")
document.write((a == 3 || b > 10 || d == 8 ),"<br>")
