/*
//ex-1 Fácil

let numMaior= [ 10, 20, 38, 69 ];
console.log(Math.max(null, ...numMaior));

//ex-2 
let fruta = [banana,manga ,laranja]
if (fruta.includes(manga)){
    console.log("manga esta na lista");
}else {
    console.log("manga não esta na lista");
}

//ex-3
let inv = [1, 2, 3, 4, 5];
let reverse= inv.reverse(1, 2, 3, 4, 5)

console.log(reverse)

//ex-4

let last = [1, 2, 3, 4, 5];
let last2 = last.pop(5)

console.log(last2);

//ex-5
let unshift = [2, 3, 4, 5];

unshift.unshift(1);

console.log(unshift);

//ex-6

let shift = [2, 3, 4, 5];

shift.shift(1);

console.log(shift);

//ex-7

const numeros5 = [2, 4, 6, 8, 10];

const todosPares = numeros5.every((x) => x % 2 === 0);

console.log(todosPares);

//ex-8
let numeros2 = [1, 2, 3, 4, 5];

let somaTotal = numeros2.reduce((acumulador, atual) => acumulador + atual, 0);

console.log(`"A soma dos números é" ${somaTotal}`);

//ex-9
let num = [9, 4, 7];
let result = num.map((x) => x * 2);

console.log(result);
*/
 
//ex-10

let batata =  [22, 2, 15, 9, 18];

let lego = batata.every(function(batata) {
  return( batata > 10);
});

console.log(lego);


//ex-1

var nome = ["ana", "jorge", "pedro", "arnaldo", "Samanta", "alfred"];
function retor (laba){
    if (laba.charAt(0) == "a") 
    return laba;
}
var naja = nome.filter(retor);
console.log(naja);

//ex-2