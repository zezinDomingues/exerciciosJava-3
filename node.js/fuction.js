function pegarcomanda(){
    console.log("ola,boa noite")
    console.log("peguei aqui sua comanda")
    console.log("bom apetite");
    console.log("-----------------------------------------")
}
pegarcomanda();

//com variancia 

let number = 3;

function calcularquadrado(number) {
    console.log( `o numero da vez é o ${number}`);
    console.log( `o numero da vez ${number } ao quadrado vale ${number ** 2}`);
}
calcularquadrado()

//com parametro


function calcularquadrado(batle) {
    console.log( `o numero da vez é o ${batle}`);
    console.log( `o numero da vez ${batle } ao quadrado vale ${batle ** 2}`);
}
calcularquadrado(7)


//segundo grau

function raiz(base){
    base**(1/2);
    console.log(base**(1/2));
}
raiz(92)

//baskhara

function baskhara(a,b,c){
    let delta = b ** 2 - 4 * a * c;
    let x1 = (-b + raiz (delta)) / (2 * a);
    let x2 = (-b - raiz (delta)) / (2 * a);

    console.log (`os dois valores de X dos pontos da parabola no eixo X são ${x1} e ${x2}`);
}

function raiz(base){
    return base ** (1 / 2);
}
baskhara(2, 3, -2);

//