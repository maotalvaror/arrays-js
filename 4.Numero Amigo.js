function numeroAmigo(numero){
  var sumatoria = 0;
  
  for (let i = 0; i < numero; i++){
    if (numero % i == 0){
      sumatoria += i;
    }
  }

  return sumatoria;
}

function main(numeroA, numeroB) {
  var numeroamigo = numeroAmigo(numeroA);
 
  if (numeroamigo == numeroB) {
    console.log('El numero',numeroA,'Es numero amigo de', numeroB)
  } else {
    console.log('No son numeros amigos')
  }
}
