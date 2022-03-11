/*-------------------EXERCICIO 1--------------------------- */
console.log('Hello world!')

/*-------------------EXERCICIO 2--------------------------- */
window.alert('Olá usuário do sistema! ')

/*-------------------EXERCICIO 3--------------------------- */

var resp = window.confirm('Tem certeza que deseja sair do sistema?')

console.log(typeof resp)

/*-------------------EXERCICIO 4--------------------------- */

var resp = window.prompt('Qual é seu herio favorito?')

alert(Seu herói favorito é ${resp})


/*-------------------EXERCICIO 5--------------------------- */

var altura = 8
var base = 12

var area = (base * altura)/2

console.log(A Area é ${area})

/*-------------------EXERCICIO 6--------------------------- */

var pi = 3.14
var r = 3
var altura = 7

var vol = pi r**2 altura;
console.log(O volume da chicara é de ${vol})

/*-------------------EXERCICIO 7--------------------------- */

var vitorias = 12
var derrota = 2
var empate = 6
var totalDeJogos = vitorias + derrota + empate

var totalDePontos = (vitorias * 3) + empate
console.log(O time Tabajara F.C acumulou ${totalDePontos} pontos após jogar ${totalDeJogos} partidas)

/*-------------------EXERCICIO 8--------------------------- */

var arr = [ 56, true, 'JS', 67, 99, 12, false, 88];

for(i = 0; i <=0; i++){
console.log(Primeiro elemento ${arr[i]})
}

console.log(arr[7])
console.log(arr[2])
console.log(typeof arr[4])

/*-------------------EXERCICIO 9--------------------------- */
var notas = [
    [10, 8.5, 5.5, 9.5],
    [8.5, 7, 7.5, 6],
    [8, 9, 10, 7.5],
    [9, 9.5, 10, 8]
    ];
    var soma = (notas[0][0] + notas[0][1] + notas[0][2] + notas[0][3]) + (notas[1][0] + notas[1][1] + notas[1][2] + notas[1][3]) +
    (notas[2][0] + notas[2][1] + notas[2][2] + notas[2][3]) + (notas[3][0] + notas[3][1] + notas[3][2] + notas[3][3])
    
    console.log(notas[2][0])
    console.log(notas[3][1])
    console.log(soma)

/*-------------------EXERCICIO 10--------------------------- */

var arr = [12, 67, 23, 32];

for( var i = 0; i < arr.length; i++){
    console.log(`Imprimindo o Array com o FOR: ${i}`)
}

for(var i in arr){
    console.log(`Imprimindo o Array com o FOR-IN ${arr[i]}`)
}

for(var data of arr){ //para cada elemento de 'arr' imprima 'data'
    console.log(`Imprimindo o Array com o FOR-OF ${data}`)
}

var arrWhile = 0
var dataWhile = 0
while(arrWhile < arr.length){
    dataWhile += arr[arrWhile]
    console.log(`Imprimindo o Array com o while ${dataWhile}`)
    arrWhile++
}

/*-------------------EXERCICIO 11--------------------------- */
var sorteados = [
    [ 1, 44, 6, 2, 45, 60],
    [10, 21, 55, 25, 34, 44],
    [ 8, 18, 28, 29, 55, 59],
    [60, 25, 11, 34, 6, 9],
    [55, 43, 25, 12, 7, 11]
    ];
    
    var quantasVezes = 0
    
    for(var i = 0; i < sorteados.length; i++){
        var innerSorteados = sorteados[i]
        for(var j = 0; j < innerSorteados.length; j++){
            if(innerSorteados[j] == 25)quantasVezes++
    }}  
    
    console.log(quantasVezes)

    /*-------------------EXERCICIO 11--------------------------- */
    var arr = [12, 67, 23, 32];

for( var i = 0; i < arr.length; i++){
console.log(`Imprimindo o Array com o FOR: ${i}`)
}

for(var i in arr){
console.log(`bImprimindo o Array com o FOR-IN ${arr[i]}`)
}

for(var data of arr){ //para cada elemento de 'arr' imprima 'data'
console.log(`Imprimindo o Array com o FOR-OF ${data}` )
}

var arrWhile = 0
var dataWhile = 0
while(arrWhile < arr.length){
dataWhile += arr[arrWhile]
console.log(`Imprimindo o Array com o while ${dataWhile}`)
arrWhile++
}

