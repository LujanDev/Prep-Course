// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length-1]; //*****CORREGIR!!!!
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  
  for(var posicion=0; posicion<array.length;posicion++){
    
    if(array[posicion]-Math.floor(array[posicion])){
    array=array[posicion]+1;
    }//probar el ejercicio porque hay que pushear los valores en un nuevo array.

  }
  return array;
  
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  var agregarElemento= array.push(elemento);
  return agregarElemento;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  var agregarItem_al_comienzo= array.unshift(elemento);
  return agregarItem_al_comienzo;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  
  var nuevoString="";
  for(var posicion=0; posicion<palabras.length;posicion++){
      nuevoString= palabras[posicion]+" ";
  }
   
   return nuevoString;
  
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  
  for(var posicion=0; posicion<array.length; posicion++){
    
    if(array[posicion==elemento]){
      return true;
      
    }else{return false;}
  }

}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma=0;
  for(var posicion=0; posicion < numeros.length; posicion++){
    suma=suma+numeros[posicion];
  }
  return suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var suma=0;
  var contador=0;
  for(var posicion=0; posicion < resultadosTest.length;posicion++){
    suma=suma+resultadosTest(posicion);
    contador++;
  }
  return (suma/contador);
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var numeroMayor=0
  
  for(var posicion=0; posicion < numeros.length; posicion++){
    
    if(numeros[posicion]>numeros[0]){
      numeroMayor=numeros[posicion];
    }
  }
  return numeroMayor;
 
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
 var args = [].slice.call(arguments);
 var total=1

 //array=[2,3,4]

 for(var posicion=0; posicion < args.length; posicion++){
  total=total*args[posicion];
 }
 return total;

//OTRO MODO DE RESOLVERLO
//var squares = [1,2,3,4];

//let nuevo = squares.reduce(function(total, num){
//total = total * num;
//return total;
//});

//console.log(nuevo);

}
function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var numeroMayorA18=0;
  var cantidad=0;
  for(var posicion=0; posicion<arreglo.length;posicion++){
    if(arreglo[posicion]>18){
      cantidad=cantidad+1; 
    }
  }
  return cantidad;

}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  
  if(numeroDeDia===7||numeroDeDia===1){
    return "Es fin de semana";
    
  }if(numeroDeDia===2||numeroDeDia===3||numeroDeDia===4||numeroDeDia===5||numeroDeDia===6){
    return "Es día laboral";
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var numeroString=n.toString();
  
  if(numeroString[0]===9){//¿el 9 debe ir entre comillas?
    return true;
    
  }else{
    false;
  }
  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí
  
  for(var posicion=0; posicion < arreglo.length; posicion++)  {
  if(arreglo[posicion]===(arreglo[posicion]+1)){
    continue;
  }else{
  return false;
  }
  }
  return true;

}
function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var nuevoArray=[];
  for(var posicion=0; posicion < array.length; posicion++){
    
    if(array[posicion]==="Enero"||array[posicion]==="Marzo"||array[posicion]==="Noviembre"){
      array[posicion].push(nuevoArray);
      
    }else{
      return "No se encontraron los meses pedidos.";
    }
    

  }

}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  
  var nuevoArray=[];
  for(var posicion=0; posicion < array.lenth; posicion++){
    if(array[posicion]>100){
        array[posicion].push(nuevoArray);
    }
  }
  return nuevoArray;

}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var numeroRecibido=numero;
  var array=[];
  
  for(var cantidad=1; cantidad<=10; cantidad++){
    numeroRecibido=numero+2;
    numeroRecibido.push(array);
    
    if(numeroRecibido===cantidad){
      return "Se interrumpió la ejecución";
      break;
    }
  }
  return array;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var numeroRecibido=numero;
  var array=[];
  
  for(var cantidad=1; cantidad<=10; cantidad++){
    
    if(cantidad!=5){
      numeroRecibido=numero+2;
      numeroRecibido.push(array); 
    }else{
      continue;
  }
  return array;

}

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
