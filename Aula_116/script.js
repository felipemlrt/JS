//peso / altura ^ 2
// obeso grau 1 >= 30
var peso = 78;
var altura = 1.57;
var IMC = 0;

IMC = altura * altura;
IMC = peso / IMC;
document.write("IMC avaliado: " + IMC + "<br>");
document.write(IMC >= 30 ? "Pelo menos em obesidade grau 1" : "Pelo menos abaixo de obesidade grau 1");