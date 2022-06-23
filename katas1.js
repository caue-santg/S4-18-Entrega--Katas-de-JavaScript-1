function oneThroughTwenty(num1a20) {
  let resultado = []

  for (let i = 1; i <= num1a20; i++) {

    if(i > 0 && i <= 20){
      resultado.push(i)
    }
  }
  return resultado
} 
//call function oneThroughTwenty
console.log(oneThroughTwenty(20))
//------------------------------------------


function evensToTwenty(numeros) {
  let numerosPares = []

  for(let i = 1; i <= numeros; i++){

    if(i % 2 ===0){
      numerosPares.push(i)
    }
  }
  return numerosPares
}
//call function evensToTwenty
console.log(evensToTwenty(20))
//------------------------------------------


function oddsToTwenty(numeros) {
  let numerosImpares = []

  for(let i = 1; i < numeros; i++){

    if(i % 2 === 1){
      numerosImpares.push(i)
    }
  }
  return numerosImpares
}
//call function oddsToTwenty
console.log(oddsToTwenty(20))
//------------------------------------------


function multiplesOfFive(numero) {
  let numerosMultiplosCinco = []

  for ( let i = 5; i <= numero; i++){

    if (i % 5 === 0){
      numerosMultiplosCinco.push(i)
    }
  }
    return numerosMultiplosCinco
}
//call function multiplesOfFive
console.log(multiplesOfFive(100))
//------------------------------------------


function squareNumbers(numero) {
  let numerosQuadradoPerfeito = []
  
  for ( let i = 1; i <= numero; i++){
    let raiz = Math.sqrt(i)

      if(raiz == Math.floor(raiz) ) {
        numerosQuadradoPerfeito.push(i)
      }
    }
    return numerosQuadradoPerfeito
  }
//call function squareNumbers
console.log(squareNumbers(100))
//------------------------------------------


function countingBackwards(num) {
  let resultado = []

  for (let i = 1; i <= num; i++) {

    if(i > 0 && i <= 20){
      resultado.push(i)
    }
  }
  return resultado.reverse()
} 
//call function countingBackwards
console.log(countingBackwards(20))
//------------------------------------------


function evenNumbersBackwards(numero) {
  let paresMaiorParaMenor = []

  for (let i = 2; i <= numero; i++){

    if (i % 2 === 0){
      paresMaiorParaMenor.push(i)
    }
  }
  return paresMaiorParaMenor.reverse()
}
//call function evenNumbersBackwards
console.log(evenNumbersBackwards(20))
//------------------------------------------


function oddNumbersBackwards(num) {
  let imparesMaiorParaMenor = []

  for (let i = 0; i < num; i++){

    if (i % 2 === 1){
      imparesMaiorParaMenor.push(i)
    }
  }
  return imparesMaiorParaMenor.reverse()
}
//call function oddNumbersBackwards
console.log(oddNumbersBackwards(20))
//------------------------------------------


function multiplesOfFiveBackwards(numeros) {
  let multiplosCinco = []

  for (let i = 5; i <= numeros; i++){

    if(i % 5 === 0){
      multiplosCinco.push(i)
    }
  }
  return multiplosCinco.reverse()
}
//call function multiplesOfFiveBackwards
console.log(multiplesOfFiveBackwards(100))
//------------------------------------------


function squareNumbersBackwards(numero) {
  let quadradoPerfeitoMaiorParaMenor = []

  for (let i = 1; i <= numero; i++){
    let raiz = Math.sqrt(i);
    
    if(raiz == Math.floor(raiz)){
      quadradoPerfeitoMaiorParaMenor.push(i)
    }
  }
  return quadradoPerfeitoMaiorParaMenor.reverse()
}
//call function squareNumbersBackwards
console.log(squareNumbersBackwards(100))