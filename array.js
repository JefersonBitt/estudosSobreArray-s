
//Criando um Array
const listaDeCompras = []
console.log(listaDeCompras)

//Populando um Array

listaDeCompras[0] = "Arroz"
listaDeCompras[1] = "Rice"
listaDeCompras[2] = 7

console.log(listaDeCompras)

// Usando array por Referência 

let array = [1, 4]
console.log(array)
let array2 = array
console.log(array2)

array2[0] = 5
console.log(array)
console.log(array2)
console.log(array[10]) //undefined

// Adicionar Elementos no Array

const arr = ["Jeferson", "Pamela", "Isa", "Joao"]
console.log(arr)

arr.push("Pedro") // Adiciona elemento no final da array
console.log(arr)

arr.unshift("Jean") // Adiciona elemento na inicio da array
console.log(arr)

// Removendo Elementos do Array

// Função .pop Remove o ultimo elemento da Array
let ultimoElemento = arr.pop()
console.log(ultimoElemento)
console.log(arr)

// Função .shift Remove elementos no inicio da Array
let primeiroElemento = arr.shift()
console.log(primeiroElemento)
console.log(arr)

// Pesquisando Elementos - Array

// includes = Pesquisa se um elemento está incluso na Array.
// Retorna um valor Booleano (TRUE ou FALSE)
let inclui = arr.includes("Jeferson") //Retorna TRUE para a variavel "inclui"
console.log(inclui)
inclui = arr.includes("Roberto") // Aqui vai retornar FALSE porque o Elemento "Roberto" náo está incluso na Array.
console.log(inclui)

// indexof = Retorna a posição exata do índice do elemento na array
let posicaoIndice = arr.indexOf("Isa")
console.log(posicaoIndice)
posicaoIndice = arr.indexOf("Joao")
console.log(posicaoIndice)

// Cortar e Concatenar - Array
//.slice = Como se ele copiasse os elementos especificos / Não modifica o array original

const arr2 = arr.slice(0, 2) //Copia dos elementos dos indices (0,1)
console.log(arr2)
console.log(arr)

const arr3 = arr.slice(-2) // Faz a copia dos elementos ao contrario referente ao seu indice / Copia dos elementos dos indices (2,3)
console.log(arr3)

// .concat = Concatenar Array

const arr4 = arr2.concat(arr3, "Pedro")
console.log(arr4)

// Utilizando função splice

const elementoRemovido = arr4.splice(1, 1, "Pâmela Bueno")
console.log(arr4)
console.log(elementoRemovido)

// Iterar (Percorrer pelo Array utilizando estrutura de repetição FOR)

for (let i = 0; i < arr4.length; i++) {
    const elemento = arr4[i]
    console.log(elemento + " se encontra na posição " + i)
}