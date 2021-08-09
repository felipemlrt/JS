//CRIACAO E ATRIBUICAO DE VARIAVEIS
var idade_minha = 30;
var idade_filho = 0;
var resultado_item_1 = 0;
var idade_pai = 92;
var resultado_item_2 = 0;
var idade_irma1 = 28;
var idade_irma2 = 26;
var resultado_item_3 = 0;
var renda_familiar = 1200;
var quantidade_pessoas_familia = 2;
var resultado_item_4 = 0;

//Faça um script  que com contenha os seguintes cálculos e exiba na tela:

//ITEM 1
//1. Exiba na tela a soma da sua idade some com a do seu filho(a); //quem não tem soma com 0.
resultado_item_1 = idade_filho + idade_minha;
document.write("soma da sua idade some com a do seu filho(a): " + resultado_item_1 + "<br>");

//ITEM 2
//2. O resultado a soma do item anterior, multiplique com a idade do seu pai;
resultado_item_2 = resultado_item_1 * idade_pai;
document.write("O resultado a soma do item anterior, multiplique com a idade do seu pai: ", resultado_item_2 + "<br>");

//ITEM 3
//3. Agora some a idade dos seus irmãos, multiplique com sua idade e divida com o resultado do item 01;
resultado_item_3 = idade_irma1 + idade_irma2;
resultado_item_3 = resultado_item_3 * idade_minha;
resultado_item_3 = resultado_item_3 / resultado_item_1;
document.write("some a idade dos seus irmãos, multiplique com sua idade e divida com o resultado do item 01: " + resultado_item_3 + "<br>");

//ITEM 4
//4. Agora, divida renda familiar pela quantidade de pessoas que compõem sua família e o resultado multiplique por 30;
resultado_item_4 = renda_familiar / quantidade_pessoas_familia;
resultado_item_4 = resultado_item_4 * 30;
document.write("divida renda familiar pela quantidade de pessoas que compõem sua família e o resultado multiplique por 30: " + resultado_item_4 + "<br>")

//ITEM 5
//E por fim, exiba na tela os resultados com um texto concatenado.
document.write("resultado1 " + resultado_item_1 + " resultado2 " + resultado_item_2 + " resultado3 " + resultado_item_3 + " resultado4 " + resultado_item_4);







