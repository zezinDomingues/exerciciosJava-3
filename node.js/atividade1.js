//Exerxício 1 fácil
let nome = "Leal";
console.log(nome);

//Exercício 2 fácil
let x = 10;
let y = 20;
console.log(x + y);

//Exercício 3 fácil
let idade = 25;
console.log(idade > 18);


//Exercício 4 fácil
let a = 10;
let b = 20; 
let c = 30;

let media = (a + b + c) / 3;
console.log(media);

//Exercício 5 fácil
let preco = 100;
preco += preco * 0.10;
console.log(preco);

// Exercício 1 medio
let anoNascimento = 2007;
let anoAtual = new Date().getFullYear(2024);

let ida = anoAtual - anoNascimento;
console.log(ida);

// Exercício 2 medio
let n = 2007;
console.log(n % 2 === 0);

// Exercício 3 medio
let salario = 750;

if (salario > 2000) {
    salario -= salario * 0.10;
} else {
    salario += salario * 0.05;
}

console.log(salario);

// Exercício 4 medio
let r = 10;
let pi = 3.14;
let perimetro = 2 * pi * r;
console.log(perimetro);

// Exercício 5 medio
let num1 = 5;
let num2 = 10;

if (num1 > num2) {
    console.log(num1 + " é maior que " + num2);
} else if (num2 > num1) {
    console.log(num2 + " é maior que " + num1);
} else {
    console.log("Os números são iguais.");
}

// Exercício 6 medio
let celsius = 20;
let fahrenheit = (celsius * 9/5) + 32;
console.log(celsius + "°C é igual a " + fahrenheit + "°F");

// Exercício 7 medio
let p = 5;
let k = 10;
console.log("Antes da troca: p =", p, ", k =", k);

p = p + k;
k = p - k;
p = p - k;
console.log("Depois da troca: p =", p, ", k =", k);

// Exercício 1 dificil

let num = 15;

if (num % 3 === 0 && num % 5 === 0) {
    console.log(num + " é divisível por 3 e por 5.");
} else {
    console.log(num + " não é divisível por 3 e por 5.");
}