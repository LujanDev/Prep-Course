// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Yanina Luján Pereyra";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 35;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  return str;
  
}
var suma=0;
function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  suma= x+y;
  return suma;
  
}
var resta=0;
function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  resta=x-y;
  return resta;
  
}
var multiplicacion=0;
function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  multiplicacion=x*y;
  return multiplicacion;
  
}
var division=0;
function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  division: x/y;
  return division;
  
}

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false" 
  if (x==y){
    return true;
  }
  else{return false;}
}

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  if(str1==str2){return true;}
  else{return false;}
}

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  if(num<90){
    return true;
  }
  else{return false;}
  
}

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  if(num>50){
    return true;
  }
  else{return false;}
  
}
var resto1=0;
function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  resto1= x%y;
  return resto1;
  
}

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  if(num%2==0){
    return true;
  }
  else{return false;}
  
}

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
if(num%2==1){
  return true;
}
else{return false;}
  
}
var cuadrado=0;
function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  cuadrado= num**2;
  return cuadrado;
  
}
var cubo=0;
function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  cubo= num**3;
  return cubo;
  
}
var elevarX=0;
function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  elevarX= num**exponent;
  return elevarX;
  
}

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  return Math.round(num);
}

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  return Math.ceil(num);
  
}

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  return Math.random();
  
}

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  
  if(numero>0){
    return "Es positivo";
    
  }else if (numero==0){return false;}
  else{
    return "Es negativo";
  }
}


var signoExclamacion="";
function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  signoExclamacion=str+"!";
  return signoExclamacion;
}
var combinarNombres="";
function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  combinarNombres=nombre+" "+apellido;
  return combinarNombres;
  
}
var saludo="";
function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  saludo= "Hola "+nombre+"!";
  return saludo;
  
}
var areaRectangulo=0;
function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  areaRectangulo=alto*ancho;
  return areaRectangulo;
  
}

var perimetro=0;
function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  perimetro=lado*4;
  return perimetro;
  
}

var areaTriang=0;
function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  areaTriang= (base*altura)/2;
  return areaTriang;

}

var cambioAdolares;
function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  cambioAdolares=euro*1.2;
  return cambioAdolares;
}


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  
  if(letra=="a"||letra=="e"||letra=="i"||letra=="0"||letra=="u"){
    return "Es una vocal";
  }
}if(letra.lenght>1){
  return "Dato incorrecto";
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
