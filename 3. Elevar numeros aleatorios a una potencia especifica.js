function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function HallarPotencia(numero, potencia) {
  return numero ** potencia; // Math.pow(numero, potencia);
}

function main(cantidadNumeros, potencia){
  var numerosArr = [];
  for (let i = 0; i < cantidadNumeros; i++) {
    numerosArr = parseInt(getRandomArbitrary(1, 10));
    console.log('El numero',numerosArr,'Elevado a la Potencia',potencia,'Es igual a',HallarPotencia(numerosArr, potencia));
  }
}