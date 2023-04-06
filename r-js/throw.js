/*Throw (lançar) siginifica que ele vai lança uma mensagem ou variavel e o catch vai pega, serve para tratar erros  */

function whatDay(dia = '') {
    if (dia === '') {
        throw 'Dia não foi informado'
    }

    console.log(dia)
}

try {
    whatDay()
} catch(e) {
    console.log(e)
}

console.log('após ao try/catch')

//  Estruturas de repetição 

for(let x = 100; x > 0; x--){
    if(x === 25 ){continue;} //  o numero 25 será retirado do resultado 
   // console.log(x)
    //pode usar o break para parar o loopping e o continue para pula a execução
        
}
let  i;
 while(i < 10){
    //console.log(i)
    i++;
 }// usase  o while quando não se sabe o momento que será realizado a parada da repetição 

 // for ... of  --> serve tanto para cadeia de caracteres quanto para arrays , ajuda na hora de coleta um elemento de cada vez


 let names = ['Thiago' , 'pedro',   'ellen']

for(let nome of names ){
    console.log(nome)
}
// Já o for.. in ajuda na hora de trabalha com objeto coletando as propiedades do objeto 

let thiago = {
    idade: 10,
    peso: 70,
    altura: 1.90 
}

for(let props in thiago){
    //console.log(thiago[props]);
}
// lista de excercicios 

// Sistema de nota 

let x1  = (Math.random() * 100);
let x = parseInt(x1);
if(x > 90 ){
    console.log("A")
    
}else if(x > 80 && x < 90){
    console.log("B")
}else if(x > 70 && x < 80){
    console.log("C")
}else if(x > 60 && x < 70){
    console.log("D")
}else{
    console.log("F")
}

//Sistema de despesa 

let familia = {
    receitas  : [1,20,5,90],
    despesas: [10,20,45,19,65.25]
}
let lucro = 0;
let despesas = 0;
for(props of familia.despesas){
    despesas += props
}
for(props of familia.receitas){
    lucro += props; 
}
console.log(despesas)
function calcular(familia){
    const total = lucro - despesas;
    if(total > 0 ){
        return `O saldo resultante neste semeste é positivo ${total}`
    }else{
        return `O saldo resultante neste semeste é negativo ${total}`
    }
    
}
console.log(calcular(familia))

// transformando  Celsiu em Finrech 


