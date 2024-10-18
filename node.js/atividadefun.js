
//ex-1
let nome1 = "jose"
function saudacao (nome1){
    console.log(`teste, ${nome1}`);
    return;    
}

let teste = saudacao(nome1)

console.log(teste)

//ex-2

let nume1 = 50
let nume2 = 51
 function soma(){
    console.log(nume1 + nume2)
    return
 }
 console.log(soma(nume1, nume2))

 //ex-3

 function parOUimpar (num){
    if (num % 2 == 0) {
        return "par"
} else {
    return "ímpar"}
}
console.log(parOUimpar(9));

//ex-4

function multiplica(){
    let mul1 = 10
    let mul2 = 20
    console.log(mul1*mul2)
}
console.log(multiplica())

//ex-5

function  conversao (C){
    
    return C * 1.8 + 32
}

console.log (conversao(35));

//ex-6

function media (a, b, c){
    return (a + b + c) /  3
}

console.log(media(10, 7, 8))

//ex-7

function minutosSegundos ( minutos){

    return minutos * 60
}
console.log(minutosSegundos(2))

//ex-8

 function ehPositivo (norp){
    if (norp > 0){ return "positivo"}
else{
    return "negativo"
}
 }
 console.log(ehPositivo(-5));

 //ex-9

 function repeatWord(bara){
 return bara.repeat(5)
 }
 console.log(repeatWord("frango "))

 //ex-10

 function area(){
    let altura = 10
    let base = 19
    console.log(base*altura)
}console.log(area()) 

//ex-1

function Palindromo(str) {
  
    let normal = str.replace(/\s+/g, '').toLowerCase();
    let invertido = normal.split('').reverse().join('');
 
    return normal === invertido;
}


console.log(Palindromo("arara")); 

//ex-2

function fatorial(n) {

    if (n < 0) {
        return "O fatorial não está definido para números negativos.";
    }
    if (n === 0) {
        return 1;
    }

    let resultado = 1;
    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }
    
    return resultado;
}

console.log(fatorial(5));
console.log(fatorial(4)); 
console.log(fatorial(2));

//ex-3

function filtraPares(eros) {

    return eros.filter(num => num % 2 === 0);
}

let eros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let pares = filtraPares(eros);
console.log(filtraPares(eros, pares));

//ex-4

function conVogais(str) {
  
    const vogais = 'aeiouAEIOU';
    let contador = 0;

 
    for (let char of str) {
        if (vogais.includes(char)) {
            contador++;}}
    return contador;
}

console.log(conVogais("batata"));

//ex-5

function flq(last) {
    return last.slice().sort(); 
}

const flu = ['cleriton', 'jefferson', 'gerson', 'ana'];
const plas = flq(flu);
console.log(plas);

//ex-1

function contaOcorrencias(palavra, texto) {
   
    const palavras = texto.split(/\s+/); 

    const ocorrencias = palavras.filter(p => p.toLowerCase() === palavra.toLowerCase());

    return ocorrencias.length;
}
const texto = "A palavra JavaScript aparece em JavaScript e é uma linguagem de programação JavaScript.";
const palavra = "JavaScript";
const numeroOcorrencias = contaOcorrencias(palavra, texto);

console.log(`A palavra "${palavra}" aparece ${numeroOcorrencias} vezes no texto.`);


//ex-2

function encontraNome(letra, nomes) {

    return nomes.find(nome => nome.startsWith(letra));
}

const listaNomes = ["Alice", "Bruno", "Carlos", "Ana", "Eduardo"];
const letra = "A";
const nomeEncontrado = encontraNome(letra, listaNomes);

console.log(nomeEncontrado); 

//ex-3

const ida = [18, 25, 21, 12, 14];

function mediaIdades(ida) {
    if (ida.length === 0) return 0; 
    const soma = ida.reduce((acc, idade) => acc + idade, 0);
    return soma / ida.length;
}


const me = mediaIdades(ida);
console.log(me); 

//ex-4

function removeDuplicatas(itens) {
    const itensUnicos = new Set(itens);

    
    return Array.from(itensUnicos);
}

const list = ["jefferson", "agia", "prado", "jefferson", "nadia", "prado"];
const listaSemDuplicatas = removeDuplicatas(list);

console.log(listaSemDuplicatas); 

//ex-5

function ordenaPorPreco(produtos) {

    return produtos.sort((a, b) => a.preco - b.preco);
}

let listaProdutos = [{ nome: "Produto A", preco: 20 },
{ nome: "Produto B", preco: 50 },
{ nome: "Produto C", preco: 90 },
{ nome: "Produto D", preco: 15 }];
let produtosOrdenados = ordenaPorPreco(listaProdutos);

console.log(produtosOrdenados);

