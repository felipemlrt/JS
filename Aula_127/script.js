// num1 = 9.51
// num2 = 10
// num3 = 0.00002
// num4 = 3E-3// 3 X 10 ^ -3 = 0.003
// num5 = 3/2;
// num6 = -5.05

// //round 0.5 = 1, 0.3 = 0
// //floor 0.5 = 0, 0.3 = 0
// //ceil  0.5 = 1, 0.3 = 1

// //      |num1     |num2      |num3      |num4      |num5    |num6
// //round |10       |10        |0         |0         |2       |-5
// //floor |9        |10        |0         |0         |1       |-6
// //ceil  |10       |10        |1         |1         |2       |-5
// //abs   |9.51     |10        |0.00002   |0.003     |1.5     |5.05

// document.write("teste round: ", Math.round(num1), " ", Math.round(num2), " ", Math.round(num3), " ", Math.round(num4), " ", Math.round(num5), " ", Math.round(num6), "<br>")
// document.write("teste floor: ", Math.floor(num1), " ", Math.floor(num2), " ", Math.floor(num3), " ", Math.floor(num4), " ", Math.floor(num5), " ", Math.floor(num6), "<br>")
// document.write("teste ceil: ", Math.ceil(num1), " ", Math.ceil(num2), " ", Math.ceil(num3), " ", Math.ceil(num4), " ", Math.ceil(num5), " ", Math.ceil(num6), "<br>")
// document.write("teste abs: ", Math.abs(num1), " ", Math.abs(num2), " ", Math.abs(num3), " ", Math.abs(num4), " ", Math.abs(num5), " ", Math.abs(num6), "<br>")

document.write("o maior da serie e: ", Math.max(19, 21, 10, 12, 19, 22, 34), "<br>");
document.write("o menor da serie e: ", Math.min(19, 21, 10, 12, 19, 22, 34), "<br>");
document.write(Math.floor(Math.random() * (750 - 250 +1)) + 250)