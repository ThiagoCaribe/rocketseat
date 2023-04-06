console.log("Goodd Morning");

//  Objeto  e lista 

let x = {name : "Thiago", idade : 21}
let z  = [ "leite", "ovo", "alface", 25]
console.log(z[0])



// Variavel 
 var xx = "como funcionar isso??"

 console.log(xx == String  ? "sim é uma string" :  "não é uma string" );
 let lista = []
 lista.push("Thiago", "roberto")
 console.log(lista); 

 //relembrando 
  let weight = "acho que é peso";

  console.log(typeof(weight));

  const objeto = {
    name : "thiago",
    age: 21,
    stars: 71.0,
    isSubscribe: true
  }

  console.log(`O ${objeto.name} tem ${objeto.age} e pesa ${objeto.stars} kilos`);

//Funçoes

function soma(n1, n2){
    return n1 + n2;
}

console.log(soma(1,54.3))
//hosting de função 

function sayMyName(name){
    return `seu nome é ${name}`
}

//arrow function 

const xub = ( ) =>{}

// função callback  é voce passa um função na hora de chama outra função

function callback(soma){
    return soma;
}
function aux(n1, n2){
    return n1+n2;
}
console.log(callback(aux))

// função contrutora 

function pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;
    
}
// this dentro da função é referencia ao objeto que onde ele foi criado neste cenario a constante thiago
const thiago = new pessoa("thiago",1 );

console.log(thiago)

//Manipulando dado 

let numero = 154.554646

console.log(numero.toFixed(2).replace('.',','))

let frase = "Eu quero viver algo novo"

let word = "Good"

console.log(Array.from(word))//  a função .from transforma uma string e cada letra vira um elemento do array
console.log(frase.split(" ").join(' ')) // o paramentro mostra qual o tipo de separador o metodo join ele junta o array

/*
 o método push(), que adiciona um elemento no final do array, o método unshift(), que adiciona um elemento no começo do array, o método pop(), que retira um elemento do final do array, o método shift(), que retira um elemento do começo do array, o método slice(), que recebe como argumentos a posição de início e a posição do fim da parte que você quer selecionar, e retorna os valores destas posições, o método splice(), que recebe como argumentos a posição de início e a quantidade de elementos que você quer remover e o método indexOff(), que encontra o index do valor que recebe como argumento em um array.

*/

delete thiago.idade

console.log(thiago)

