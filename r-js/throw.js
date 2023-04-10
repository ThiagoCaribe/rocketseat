/*Throw (lançar) siginifica que ele vai lança uma mensagem ou variavel e o catch vai pega, serve para tratar erros  */
/*
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

 function covesorDeMedida(string){
    let celsiu = string.toUpperCase().includes("C");
    let farent = string.toUpperCase().includes("F");
    let result;
    if(!celsiu && !farent){
        throw  new Error("Grau não reconhecido.");
    }
  //Criando uma formula de extrair o o numero 
  
    let extracao = Number(string.toUpperCase().replace("F", " "))
    let formula = (fare) =>(fare - 32) * 5/9 
    if(celsiu){
         extracao = Number(string.toUpperCase().replace("C", " "))
         
         formula = (ce) => ce * 9/5 + 32
         return formula(extracao.toFixed(2)  ) + "F"
    }
    return formula(extracao).toFixed(2)  + 'C'
 }
try {
    console.log(covesorDeMedida("70C"))
}catch(err){
console.log(err.message)

} */
// trabalhando arrays 

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

 let  numberOfCategories = booksByCategory.length ;
 let  numberOfBooks = 0 ;



 for(let livros of booksByCategory){
   // console.log(livros.books.length)
 };

let contado= 0;
function pegaNome(){

    let autor = []
    for(let category of booksByCategory){ 
    for(let livros of category.books){
        if(autor.indexOf(livros.author) == -1){
           autor.push(livros.author)
        }
    }
   
}  
return autor

}

function pegaNomeAgust(){
    let livrosA = []
    for(let category of booksByCategory){ 
    for(let livros of category.books){
        if(livros.author == 'Augusto Cury'){
           livrosA.push(livros.title)
        }
    }
   
    }  
    return `Livros escritos  por Agusto Cury são  ${livrosA} `
}

function pegaNomeAutor(autor){
    let livrosA = []
    for(let category of booksByCategory){ 
    for(let livros of category.books){
        if(livros.author == autor){
           livrosA.push(livros.title)
        }
    }
   
    }  
    return `Livros escritos  pleo ${autor}  são  ${livrosA} `
}
let aux = 'Stephen R. Covey'

console.log(pegaNomeAutor(aux))  

 //console.log(numberOfBooks)