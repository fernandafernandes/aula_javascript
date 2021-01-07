/*
var nome = "Fernanda Fernandes";
var idade = 32;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";
alert(nome + " tem " + idade + " anos.");
alert(idade + idade2);
console.log(frase);
console.log(frase.replace("Japão", "Brasil"));
alert(frase.replace("Japão", "Brasil"));
console.log(frase.toUpperCase());
*/

/*Array
var lista = ["maçã", "pêra", "laranja"];
console.log(lista);
//Exibe a quantidade de elementos contidos no array
console.log(lista.length);
//Insere elemento no array
lista.push("uva");
lista.push("pêssego");
console.log(lista);
console.log(lista.length);
//Remove último elemento do array
lista.pop();
console.log(lista);
console.log(lista.length);
//Exibe a lista em ordem reversa
//console.log(lista.reverse());
//Metodo toString() exibe array
console.log(lista.toString());
//O metodo join exibe a lista separada pelo caracter que você escolher como parametro
console.log(lista.join("-"));
*/

/*Dicionario
var fruta = {nome:"maçã", cor:"vermelha"};
console.log(fruta);
*/

/*Lista de dicionarios
var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
console.log(frutas);
alert(frutas[1].cor);
*/

/*Condicional if/ele
var idade = prompt("Qual é a sua idade?");
if (idade >= 18) {
    alert("Maior de idade.");
}else{
    alert("Menor de idade.");
}
*/

//Lacos de repeticao

/*
//Estrutura While
var count = 0;
while (count <= 5) {
    console.log(count);
    count++;
}

//Estrutura For
for (var count = 0; count <= 5; count++) {
    alert(count);
}
*/

//Datas
//var d = new Date();
/*O metodo getMonth() eh Zero Based(Comeca com 0, ou seja, janeiro eh
representado por 0), entao incrementa 1 para chegar ao mes que deseja.
//alert(d.getMonth()+1);
*/

//alert(d.getHours());
//alert(d.getMinutes());

/*
//O metodo getDay() retorna o dia da semana e nao o dia do mes, respeitando a seguinte regra:
// 0 = domingo
// 1 = segunda-feira
// 2 = terca-feira
// 3 = quarta-feira
// 4 = quinta-feira
// 5 = sexta-feira
// 6 = sabado
alert(d.getDay());
*/

//Funcoes
/*
function soma(n1,n2) {
    return n1+n2;
}

function validaIdade(idade) {
    var validar;
    if (idade >= 18) {
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));
*/

function load() {
    alert("Página carregada.");
}

function funcaoChange(elemento) {
    console.log(elemento.value);
}

function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado(a) por clicar</b>";
    
}

function redirecionar(params) {
    window.open("https://google.com");

}

function trocar(elemento) {
    elemento.innerHTML = "Obrigado(a) por passar o mouse."
}

function voltar(elemento) {
    elemento.innerHTML = "Passe o mouse aqui."
}













