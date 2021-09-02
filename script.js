/* ## Transformar nota escolares
Crie um algoritmo que transforme as notas do sistema 
numérico para sistemas de notas de caracteres, tipo A, B, C...

* de 90 para cima = A
* entre 80 - 89   = B
* entre 70 - 79   = C
* entre 60 - 69   = D
* menos do que 60 = F

*/

//resposta: usei condicionais de If, Else e Else If e elementos de comparações.
//Ainda limitei o escopo para notas de 0-100, impedindo que o usuário receba notas com
//valores fora do padrão estabelecido. 

//após o exercício, foi possível colocar o scope numa função afim de organizar o código.

function getNota(nota) {

if (nota < 60 && nota >= 0) {
    console.log("Sua nota é = F")
}else if(nota < 70 && nota >= 60){
    console.log("Sua nota é = D")
}else if(nota < 80 && nota >= 70){
    console.log("Sua nota é = C")
}else if(nota < 90 && nota >= 80){
    console.log("Sua nota é = B")
}else if(nota <= 100 && nota >= 90){
    console.log("sua nota é = A")
}else{
    console.log("Nota inválida: por favor, insira uma nota de 0 - 100")
}

return(nota)
}

//exemplos de entradas de notas variadas:
getNota(101)
getNota(95)
getNota(50)
getNota(-1)
getNota(0)
getNota(68)
getNota(88)
getNota(91)