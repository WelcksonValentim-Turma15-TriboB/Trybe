//Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n .//
/* let n = 5;
let asteriscos = [];
let consolidacao = '*';
for (let index = 0; index < n; index += 1) {
    for (let index = 0; index < n; index += 1) {
        asteriscos[index] = consolidacao;
    }
    console.log(asteriscos);
} */

//Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.//
/* 
let n = 5;
let consolidacao = '*';
let asteriscos = [];
    for (let index = 0; index < n; index += 1) {
        asteriscos += consolidacao;
        console.log(asteriscos);
    } */

/* // 3 - Agora inverta o lado do triângulo.
let n = 5;
let asteriscos = "*";
let espaco = "";
let consolidacao = n;
    for (let index = 0; index < n; index += 1) {
        for (let variavel = 0; variavel <= n; variavel += 1) {
            if (variavel < consolidacao){
                espaco = espaco + " ";
            }
            else {
                espaco = espaco + asteriscos;
            }
        }     
    console.log(espaco);
    espaco = "";
    consolidacao -= 1;
    } */

/* // 4 - Depois, faça uma pirâmide com n asteriscos de base:
let n = 5;
let asteriscos = "*";
let espaco = "";

let meioPiramide = ( n + 1 ) / 2;
let esquerdaPiramide = meioPiramide;
let direitaPiramide = meioPiramide;


    for (let index = 0; index <= meioPiramide; index += 1) {
        for (let variavel = 0; variavel <= n; variavel += 1) {
            if (variavel > esquerdaPiramide && variavel < direitaPiramide){
                espaco = espaco + asteriscos;
            }
            else {
                espaco = espaco + " ";
            }
        }     
    console.log(espaco);
    espaco = "";
    direitaPiramide += 1;
    esquerdaPiramide -= 1;
    } */

