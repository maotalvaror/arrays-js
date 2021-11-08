function LlamarFunción(arreglo) {
  for (let i = 0; i < arreglo.length; i++) {
    let palabras = arreglo[i].toString().split(' ');
    console.log('La palabra "',arreglo[i],'" tiene =',palabras.length,' palabras')
  }  
}