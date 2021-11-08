function LlamarFunción (arreglo) {
  let sumatoria = 0;

  for (let i = 0; i < arreglo.length; i++) {
    let digitos = arreglo[i].toString().split('');
    let CantidadDigitos = digitos.length;
    let todoSusDigitosSonPares = true;

    for (let j = 0; j < CantidadDigitos; j++) {
      if (digitos[j] % 2 != 0) {
        todoSusDigitosSonPares = false;
        break;
      }
    }
    
    if (todoSusDigitosSonPares == true) {
      sumatoria += arreglo[i];
    }
  }  

  console.log('sumatoria =',sumatoria)
}

