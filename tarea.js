//Crea una función nombrada que sume dos números.

function suma (num1, num2){
    let resp= num1+num2 
    return resp
}  console.log( "La suma es: " ,suma (5,6))

//Escribe una función nombrada que reste dos números
function resta (a,b) {
    let resp= a-b
    return resp
} 
console.log("La resta es: ", resta(4,2))

//Desarrolla una función nombrada que multiplique dos números
function multi (nu1, nu2){
let resp= (nu1*nu2)
return resp
}
console.log("La multiplicación es: ", multi(2,4))

//Implementa una función nombrada que divida dos números
function div (d1,d2){
    let resp= (d1/d2)
return resp
}
console.log("La división es: ", div(10,5))

//Diseña una función nombrada que calcule el módulo de dos números
function residuo (r1,r2){
    let resp= (r1%r2)
    return resp
}
console.log("El residuo de los dos números es de: ", residuo(10,3))

//FUNCIÓN ANONIMA//

//Asigna una función anónima a una variable que eleve un número al cuadrado
let ElevarAlCuadrado = function (number){
    return number**2 
}
console.log("La elvación del número es de: ", ElevarAlCuadrado(4))


//Usa una función anónima para convertir grados Celsius a Fahrenheit
let CelsiFal = function (tranfor){
    return tranfor*9/5+32  
}
console.log("La transformación es de: ",CelsiFal(30))


//Crea una función anónima que calcule el perímetro de un rectángulo
let CalcuPeri = function(base,altura){
    return  2*(base+ altura)
}
console.log("El perimetro es de: ",CalcuPeri(3,5))


//Implementa una función anónima que determine si un número es par o impar
let ParImpar= function (number){
    if (number%2==0){
        return "Es par"
    } else{
        return "Es impar"
    }
} 
console.log("El número ingresado : ", ParImpar(10))


//Escribe una función anónima que devuelva el número mayor entre dos números.
let numberbig= function(n1,n2){
    if(n1>n2){
        return "El primer número es el mayor"
    } else{
        return "El segundo número es el mayor"
    }
} 
console.log("El mayor es : ", numberbig(7,9))


//FUNCIÓN FLECHA//


//Desarrolla una función flecha que calcule el área de un círculo
let areaCircul = (radio) =>{
    return Math.PI*radio**2
}
console.log("El area del circulo es:",areaCircul(10))


//Crea una función flecha que convierta kilómetros a millas
let KiloMillas = (tranfor)=>{
return tranfor*0.621317
}
console.log("La transformación es de: ",KiloMillas(10))


//Escribe una función flecha que retorne el nombre completo dado un nombre y apellido
let obj = nombres => ({nombre: "kenia", apellido:"Arana"})
console.log("El nombre completo es: ",obj())


//Implementa una función flecha que verifique si un texto contiene la letra 'a'
let contieneLetraA = texto => texto.includes('a')
console.log(contieneLetraA("Hola soy Kenia, mucho gusto")) 


//Diseña una función flecha que cuente cuántos elementos en un array son números
let contarNumeros = Array=> Array.filter(item=>typeof item==="number").length
console.log(contarNumeros([1,4,6,123,"Kenia",56]))

//ORDEN SUPERIOR//

//Escribe una función de orden superior que tome una función y la aplique a todos los
//elementos de un array
let Array= [1,3,5]
let newArray= Array.map((element)=> element+4)
console.log(newArray)
  

//Crea una función de orden superior que filtre elementos de un array basándose en una
//condición dada
let filtNumber= (Array2,condition)=>Array2.filter(condition)
let Array2=[1,3,5,3,7,12,7]
let condition= element=>element >3
let newFilter= filtNumber (Array2,condition)
console.log(newFilter)


//Desarrolla una función de orden superior que retorne una nueva función
//incrementadora
let incremntadora=(incremnto)=>{
    let incre=incremnto
    return function(){
        return ++incre
    }
}
let incrementa=incremntadora(10)
console.log(incrementa())


//Implementa una función de orden superior que tome dos funciones como argumentos
//y elija una para ejecutar basada en una condición.
function ejecutarFuncionSegunCondicion(condicion, funcionSaludo, funcionEdad) {
    if (condicion) {
        return funcionSaludo();
    } else {
        return funcionEdad();
    }
}
function obtenerSaludo() {
    return "Hola, buenos días!"
}

function obtenerEdad() {
    return 20
}

let esSaludo = false
console.log(ejecutarFuncionSegunCondicion(esSaludo, obtenerSaludo, obtenerEdad))



//Diseña una función de orden superior que modifique un objeto utilizando otra función
//proporcionada.
let funcionObje= (objeto,funcionodi)=> {
 return funcionodi (objeto)
} 
let person={
    nombre: "Kenia",
    edad: 20
}

let increedad=(objeto)=>{
    objeto.edad++
    return objeto
}

let funtionModifica = funcionObje(person,increedad)
console.log(funtionModifica);

//CONSTRUCTURA

//Define una función constructora para un objeto "Coche" que tenga propiedades como
//marca, modelo y año
function coche(marca,modelo,año){
    this.marca=marca
    this.modelo=modelo
    this.año=año
}
 
let MeCoche= new coche("Toyota", "Corolla","2020")
console.log(MeCoche)

//Crea una función constructora para un objeto "Libro" con propiedades de autor, título
//y año de publicación
function book (autor,título,año){
this.autor=autor
this.título=título
this.año=año
}

let mebook= new book ("Klune","La canción del lobo","2015")
console.log(mebook)

//Implementa una función constructora que cree objetos "Usuario" con nombre, correo
//electrónico y contraseña

function Usuario(nombre,correo,contraseña) {
    this.nombre=nombre
    this.correo=correo
    this.contraseña=contraseña
}
let meUsuario = new Usuario("Kenia","KeniaOrdonez034@gmail.com","*******")
console.log(meUsuario)

//Escribe una función constructora para "Producto" con propiedades de nombre, precio y
//cantidad

function mangas (nombre,precio,cantidad){
this.nombre=nombre
this.precio=precio
this.cantidad=cantidad
}
let meproduct = new mangas("Kiss me Liar","$140" ,"3")
console.log(meproduct)

//Desarrolla una función constructora que inicialice objetos "Estudiante" con nombre,
//matrícula y carrera

function Estudiante (nombre,matrícula,carrera){
    this.nombre=nombre
    this.matrícula=matrícula
    this.carrera=carrera
}
let matriculación= new Estudiante ("Kenia","Aprobada","Software")
console.log(matriculación)

//CURSIVA

//Escribe una función recursiva para calcular el factorial de un número
function factorial (number){
    if (number===0){
        return 1
    }
return number*factorial(number-1)
}
console.log("El factorial del número es de: ",factorial(3))

//Crea una función recursiva que sume todos los números hasta un número dado
function suma (number){
 if (number===0){
    return 0
 }
return number+suma(number-1)
}
console.log("La suma es de: ",suma(4))

//Implementa una función recursiva que encuentre el máximo común divisor (MCD) de
//dos números
function mcd (n1,n2){
if (n2===0){
    return n1
}
return (n1,n1%n2)
}
console.log("El MCD es de:",mcd(12,18))

//Diseña una función recursiva que genere la secuencia de Fibonacci hasta un número
//específico
function fibonacciHasta(numero, secuencia = [0, 1]) {
    if (secuencia[secuencia.length - 1] > numero) 
    return secuencia.slice(0, -1);
    secuencia.push(secuencia[secuencia.length - 1] + secuencia[secuencia.length - 2]);
    return fibonacciHasta(numero, secuencia);
}
console.log("La secuencia es:",fibonacciHasta(12))

//Desarrolla una función recursiva que invierta una cadena de texto
 function inversatext (text){
if (text===""||text.length===1)
return text 
return inversatext(text.slice(1))+ text[0]
 }
console.log(inversatext(" Yo seré de los piratas"))

//Demuestra el uso de una variable global modificándola dentro de una función
let contadorGlobal = 0

function aumentarContador() {
    contadorGlobal++
}
console.log("Valor inicial del contador global: ", contadorGlobal)
aumentarContador()
console.log("Nuevo valor del contador global: ", contadorGlobal)

//Escribe un código donde una variable local oculte una variable global del mismo nombre
let variable = "global"

function ejemplo() {
    let variable = "local"
    console.log("Dentro de la función:", variable)
}
console.log("Fuera de la función:", variable)

//Explica mediante un ejemplo cómo las variables locales pueden evitar conflictos de
//nombres
let nombre = "global"

function saludar() {
    var nombre = "local"
    console.log("Hola,", nombre)
}

saludar()

console.log("Adiós,", nombre) 

//Implementa un contador utilizando una variable global
let contadorGlobalr = 0;

function incrementarContador() {
    return ++contadorGlobalr;
}

console.log(incrementarContador()) 
console.log(incrementarContador())
console.log(incrementarContador())

//Crea una función que intente modificar una variable local definida en otra función
function crearFuncionModificadora() {
    let variableLocal = 0;

    return function modificarVariableLocal(nuevoValor) {
        variableLocal = nuevoValor;
        console.log("Variable local modificada:", variableLocal);
    };
}

let modificarVariable = crearFuncionModificadora();
modificarVariable(19)

//Escribe una función que determine si un año es bisiesto

function añobisistiesto(año){
 return(año%4===0 && año%100!==0) 
}
console.log(añobisistiesto (2013))

//Implementa una función que evalúe tres números y retorne el mayor

function elmayordetres (n1,n2,n3){
    return Math.max(n1,n2,n3)
}
console.log("El mayor entre los tres es: ",elmayordetres(3,4,5))

//Diseña una función que decida si un estudiante aprueba o reprueba basado en su nota
function repruaprueba (nota){
if (nota>=7){
return "¡Apruebas!"
}else{
    return "No aprobaste, sigue estuando"
}
}
console.log(repruaprueba(10))

//Crea una función que clasifique una edad en categorías (niño, adolescente, adulto,
//anciano)
function clasificacionporedad (edad){
    if (edad<=10){
return "Esta en la estapa de la niñez"
    } else if (edad<=18){
return "Estas en la etapa de la adolescencia"
    } else if (edad<=65 ){
        return "Estas en la etapa de la adultez"
    } return "Esta en la etapa de un anciano"
}
console.log(clasificacionporedad(100))

//Desarrolla una función que verifique si un usuario tiene acceso basado en su edad
function acceso (edad) {
    if (edad>=18){
        return "Tiene acceso"
    } else 
    return "No tiene acceso"
} 
console.log(acceso(20))
 
//BUCLES WHILES
//Escribe un bucle while que cuente de 1 a 100
let contador = 1
while (contador<=100) {
    console.log(contador)
contador++
} 

//Implementa un bucle while que sume los primeros 50 números naturales
let ontado=1
let suma1=0
while (ontado<=50) {
    suma1+=ontado
    console.log(ontado)
ontado++
}

//Desarrolla un bucle while que encuentre el primer número divisible por 7 en un rango

let numeroin=1 
let limite=100
while (numeroin<=100) {
    if (numeroin%7===0){
        console.log("Los números divisibles son:",numeroin)
    break
    }
} numeroin++

//Diseña un bucle while que verifique la entrada del usuario hasta que sea válida

let entradaValida = false;

while (!entradaValida) {
    let entrada = prompt("Por favor, introduce un número entre 1 y 10:");

    if (entrada.trim() !== '' && !isNaN(entrada) && Number(entrada) >= 1 && Number(entrada) <= 10) {
        console.log("¡La entrada es válida!");
        entradaValida = true; 
    } else {
        console.log("La entrada no es válida. Por favor, introduce un número entre 1 y 10.");
    }
}

//Escribe una función que use switch para asignar calificaciones (A, B, C, D, F) basado en
//puntos

function asignarCalificacion(puntos) {
    let calificacion;

    switch (true) {
        case puntos >= 90:
            calificacion = 'A';
            break;
        case puntos >= 80:
            calificacion = 'B';
            break;
        case puntos >= 70:
            calificacion = 'C';
            break;
        case puntos >= 60:
            calificacion = 'D';
            break;
        default:
            calificacion = 'F';
    }

    return calificacion;
}
console.log(asignarCalificacion(60))

function chatbot(command) {
    let response;

    switch (command.toLowerCase()) {
        case 'hola':
            response = '¡Hola! ¿En qué puedo ayudarte?';
            break;
        case 'adios':
            response = '¡Hasta luego! Que tengas un buen día.';
            break;
        case 'hora':
            response = 'La hora actual es: ' + new Date().toLocaleTimeString();
            break;
        default:
            response = 'Lo siento, no entiendo ese comando. ¿Podrías repetirlo?';
    }

    return response;
}
console.log(chatbot)

//
function procesarPago(metodoDePago) {
    let mensaje;

    switch (metodoDePago.toLowerCase()) {
        case 'efectivo':
            mensaje = 'El pago se realizará en efectivo.';
            break;
        case 'tarjeta':
            mensaje = 'El pago se realizará con tarjeta.';
            break;
        case 'cheque':
            mensaje = 'El pago se realizará con cheque.';
            break;
        default:
            mensaje = 'Lo siento, método de pago no válido.';
    }

    return mensaje;
}
console.log(procesarPago(cheque))
//Desarrolla una función que utilice switch para realizar cálculos básicos (+, -, *, /).

function calcular(operacion, num1, num2) {
    let resultado;

    switch (operacion) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                resultado = 'Error: No se puede dividir entre cero';
            }
            break;
        default:
            resultado = 'Operación no válida';
    }

    return resultado;
} 
console.log(calcular("+"))

//Diseña un switch para cambiar entre diferentes idiomas de un sitio web
let idiomaActual = 'es'; // Idioma predeterminado

function cambiarIdioma(nuevoIdioma) {
    switch (nuevoIdioma) {
        case 'es':
            mostrarMensaje('Bienvenido', '¡Gracias por visitar nuestro sitio web!');
            break;
        case 'en':
            mostrarMensaje('Welcome', 'Thank you for visiting our website!');
            break;
        case 'fr':
            mostrarMensaje('Bienvenue', 'Merci de visiter notre site web!');
            break;
        default:
            mostrarMensaje('Idioma no soportado', 'Lo sentimos, el idioma seleccionado no está soportado.');
    }
}

function mostrarMensaje(titulo, contenido) {
    console.log(titulo + ': ' + contenido);
}

//Implementa un bucle for que imprima todos los elementos de un array
const miArray = [10, 20, 30, 40, 50];

for (let i = 0; i < miArray.length; i++) {
    console.log(miArray[i]);
}
//
const miArray2 = [2, 3, 4, 5];
let resultado = 1; // Inicializamos el resultado en 1

for (let i = 0; i < miArray.length; i++) {
    resultado *= miArray[i];
}

console.log("El resultado de la multiplicación de todos los elementos del array es:", resultado);

//
const miArray3 = [10, 5, 8, 3, 12];
let menor = miArray[0]; // Asignamos el primer elemento del array como el menor inicialmente

for (let i = 1; i < miArray.length; i++) {
    if (miArray[i] < menor) {
        menor = miArray[i];
    }
}

console.log("El menor número en el array es:", menor);

//
const miArray4 = [10, 20, 30, 40, 50];
const elementoBuscado = 30;
let encontrado = false;

for (let i = 0; i < miArray.length; i++) {
    if (miArray[i] === elementoBuscado) {
        encontrado = true;
        break; // Si se encuentra el elemento, no es necesario continuar buscando
    }
}

if (encontrado) {
    console.log("El elemento", elementoBuscado, "ha sido encontrado en el array.");
} else {
    console.log("El elemento", elementoBuscado, "no ha sido encontrado en el array.");
}

//
const arrayOriginal = [1, 2, 3, 4, 5];
let arrayCopia = [];

for (let i = 0; i < arrayOriginal.length; i++) {
    arrayCopia[i] = arrayOriginal[i];
}

console.log("Array original:", arrayOriginal);
console.log("Array copia:", arrayCopia);

