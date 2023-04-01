//Checkpoint 1 de Web development with Java

//Questão 1 (Variavel undfined)
let exemplo//Variavel sem valor atribuido
console.log("Exemplo 1: " + exemplo) 

//Questão 2 (operador %)
let num1 = 5
let num2 = 2
let resto = num1 % num2
console.log("O resto da divisao entre 5 e 2 é: " + resto)
//O operador % denomina o "resto" de uma divisão

//Questão 3 (IMC)
// imc = PESO / (altura * altura)
peso  = 70
altura = 1.69
imc = (peso / (altura * altura))
console.log("Seu IMC é de", imc.toFixed(2))

if (imc < 18.5)
 console.log("Voce esta abaixo do peso ideal")
 
else if (imc > 24.9)
    console.log("Voce esta acima do peso ideal")

else
   console.log("Voce esta dentro do peso ideal")
//
