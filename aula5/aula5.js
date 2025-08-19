//ativade

let readline = require('readline-sync');

//Nome
let nome = readline.question ("Qual é seu nome? ");

//Ano que nasceu
let nascimento = readline.question ("Em que ano você nasceu? ");

//Converte para número
nascimento = parseInt(nascimento);

//Calcula idade
let ano = 2025;
let idade = ano - nascimento;

console.log(`Olá ${nome}, você tem ${idade} anos.`)

//Pode ser preso?

if (idade >=18){
    console.log("Você já pode ser preso!");
}else{("Você ainda não pode ser preso!");
    
}



