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

//Questão 4 (idade)
let idade = 23

if(idade >=0 && idade <= 12){
    console.log("É uma Criança")
}else if(idade <= 18){
    console.log("É um Adolescente")
}else if(idade <= 59){
    console.log("É um Adulto")
}else{
    console.log("È um Idoso")
}

//Questão 5 (usuario)

const usuario_cadastrado = "admin";
const senha_cadastrada = "1234";

const usuario = prompt("Digite seu usuário:");
const senha = prompt("Digite sua senha:");

if (usuario === usuario_cadastrado && senha === senha_cadastrada) {
  alert("Login realizado com sucesso!");
} else {
  alert("Falha de autenticação. Verifique seu nome de usuário e senha.");
}

//Questão 6 (Media notas)
n1 = 4
n2 = 2
n3 = 5
n4 = 6
n5 = 7
n6 = 8
n7 = 6

media = ((n1 + n2 + n3 + n4 + n5 + n6 + n7) / 7)
if (media >= 6){
    console.log("O aluno foi aprovado, sua media foi: " + media.toFixed(2))
}
else if (media < 6){
    console.log("O aluno foi reprovado, sua media foi: " + media.toFixed(2))
}

//Questão 7 (tela verde)

const h1Element = document.getElementById("tela_green")

h1Element.addEventListener("click", function() {
    document.body.style.backgroundColor = "green"
    alert("Fundo verde!")
})

//Questão 8 (on mouse over azul)

const div1 = document.getElementById("passe_o_mouse");

div1.onmouseover = function() {

  div1.innerHTML = "fundo azul";
  
  div1.style.backgroundColor = "blue";
};

div1.onmouseout = function() {
  
  div1.innerHTML = "Passe o mouse aqui";
  
  div1.style.backgroundColor = "";
};

//Questão 9 (on mouse over/out)

const div2 = document.getElementById("Ola");

div2.onmouseover = function() {
    div2.innerHTML = "Olá!";
    div2.style.backgroundColor = "green";
  };
  
  div2.onmouseout = function() {
    div2.innerHTML = "Tchau";
    div2.style.backgroundColor = "yellow";

    
  };
