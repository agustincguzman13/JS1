
// //asignacion
// let edad= 40

// //reasignacion de valores
// edad= 50;
// /* -------------- */
// /* constantes */
// const PI= 3.141516
// let nombre= "agustin"
// let apellido= "guzman"
// let nombreCompleto= nombre + " " + apellido ;//concatenar variables (cuando se usa + en una union de string)

// let resultado = PI + 4.21;
// console.log(resultado);
// resultado = PI / 3;
// console.log(resultado);
// resultado = 3 * PI-3;
// console.log(resultado);

// /* metodo de salida  aparece solo en la consola*/
// console.log(apellido);
// console.log(nombre);
// console.log(nombreCompleto);
// console.log("el valor del resultado es " + resultado);
// console.log(edad + "10");

// /* alert -- aparece un texto cuando abris la pagina
// alert("hasta q no le de aceptar el programa no contunua")*/
// alert("holissssss")
// /* metodo de entrada al usuario le permite ingresar un texto */
// let usuario=prompt("ingresa tu nombre de usuario")

// alert("bienvenido" + usuario);
// let num1= parseFloat(prompt("ingresa un numero")); //parsefloat es para declarar que el dato es un numero
// let num2= parseFloat(prompt("ingresa otro numero"));
// console.log(num1);
// console.log(num2);
// let resultado2= num1 + num2 ;
// alert (resultado2);

//segunda clase
//si(condicion)entonces ejecucion
/* if(true){
    console.log("vas a ver este msj");
} */

/* let temperatura=30;

if(temperatura <30 ){
console.log("esta agradable");
}else{
    console.log("quecaloooo");
} */
// = asignacion / == comparacion / != distinto de
/* let usuario= prompt("ingresa tu usuario");
if(usuario == ""){
    console.log("no ingresaste tu usuario");
}else{
    console.log("bienvenidas " + usuario);
} */
/* 
let num= parseFloat(prompt("ingresa tu edad"));
if (num > 18){
    console.log("podes ingresar al casino");
}else{
    console.log("no podes ingresar salamin");
} */
/* if concatenados
let precio =177;
if(precio <100){
    console.log("precio menor a 100");
}else if(precio <120){
    console.log("preio menor a 120");
}else if (precio <180){
    alert("precio menor a 180")
}else{
    console.log("precio es " + precio);
} */


//operadores logicos condicion1 && condicion2
//v & v = v / f && v = f / v && F= f 

/* let usuario="Agustin"
let contraseña="Guzman"
let ingUsuario= prompt("ingresa tu usuario")
let ingContraseña= prompt("ingresa tu contraseña")
if((usuario == ingUsuario || ingUsuario =="charly") && contraseña ==ingContraseña){
    alert("bienvenido")
    console.log("bienvenido");
}else{
    alert("intenta de nuevo")
    console.log("intenta de nuevo");
}; */

// el operador || (or) devuelve true si alguna de las 2 condiciones se cumplen
/* let edadObligatoria=18, edadOptativa=16, edadLimite=69;
let edadUsuario= parseInt(prompt("ingresa tu edad"));
if(edadUsuario >= edadObligatoria && edadUsuario <= edadLimite){
    alert("estas obligado a votar")
}else if(edadUsuario >= edadOptativa || edadUsuario > edadLimite){
    alert("podes ir a votar si queres")
}else{
    alert("no podes votar aun")
} */

/* 
//CICLOS 
//for (desde; hasta; actualizacion) i= i+1
alert("podes hcerme 3 preguntas");
alert("que bueno xq solo necesito 1");
let respuesta="";
//bucle for
for (let i = 0; i < 3; i++) {
    let pregunta = prompt("");
    if (pregunta != "usted?"){
        respuesta="SI";
        alert(respuesta);
    }else {
        respuesta = "asi es.. espero los haya iluminado"
        alert(respuesta);
    }
    
} */
/* let ingreso=parseInt(prompt("ingresa un numero para multiplicar"));
if(isNaN(ingreso)){
    alert("el valor ingresado no es un numero");
}else{
for(let i=0; i<=10; i++){
    for(let i=0; i<=10; i++){
        let resultado= ingreso * i;
        console.log("el resultado de " + ingreso + " x " + i + " es " + resultado);
}}} */
//realizar un script que muestre si un número ingresado es primo, es decir solo se puede dividir por 1 y por sí mismo.

/* let ingreso = parseInt(prompt("ingresa un numero para multiplicar"));
let esPrimo=true;
for(let i=2; i < ingreso; i++){
    if(ingreso%i === 0){
        console.log("ademas de dividir por 1 y por si mismo, se divide por", i);
        esPrimo=false;
    }
}
if(esPrimo){
    alert (ingreso + " es primo")
}else{
    alert(ingreso + " no es primo")
} */

//sentencia break
/* let secreto="tarola";
for(let i=1 ; i<=3 ; i++){
    let ingreso=prompt("adivina la palabra ");
    if(ingreso === secreto){
        alert("adivinaste");
        break;
    }else{
        alert("no adivinaste una verga")
    }
} */
//sentencia continue

/* for(let i = 0; i<= 50; i++){
    if(i % 5 === 0){
        console.log(i + " es multiplo de 5");
        continue;
    }
    console.log(i);
} */

//while
/* let ingreso= prompt("ingresa un producto. Para salir ingresa 0");
while (ingreso != "0"){
    console.log("ingresaste el proucto " + ingreso);
    //condicion de salida
    ingreso= prompt("ingresa otro producto. para salir ingresa 0");
}
console.log("fin del script"); */

//do while
/* let ingreso= prompt("ingresa un producto. Para salir ingresa 0");
do{
    if(ingreso == "0"){
    console.log("operacion cancelada");
    }else {
        console.log("ingresase el producto " + ingreso);
        ingreso = prompt("ingresa el otro producto. Para salir ingresa 0")
    }
}while(ingreso != "0"); */

/* //1er clase
let nombre="agustin"
let apellido="guzman"
console.log(nombre + " " + apellido);

let num1= parseFloat(prompt("ingresa un numero"))
console.log(num1);
let num2=parseFloat(prompt("ingresa otro numero"))
console.log(num2);
let resultado= num1 + num2;
alert("el resultado de la suma entre " + num1 + " y "+ num2 + " es " + resultado);

//2da clase
let temperatura = 29;
if(temperatura > 27){
    console.log("ta fresquito");
}else{
    console.log("ac calo");
}

let usuario= prompt("ingresa usuario")
if(usuario != ""){
    alert("bienvenido " + usuario)
}else{
    alert("no ingresaste nada panflin")
}

let num3= parseFloat(prompt("ingresa edad para entrar a casino"))
let mayorEdad= num3>= 18
alert(mayorEdad)
if(mayorEdad){ 
    alert("bienvenido a casino rey o reina")
}else{
    alert("ch, a donde vas? anda a dormir niño")
}  */

/* let precio= parseFloat(prompt("ingresa un precio rey"))
if(precio <= 180){
    alert("es menor o igual a 180")
}else if(precio<=220){
    alert("precio menor o igual a 220")
}else{
    alert("el precio es " + precio)
} */
/* let ingUsuario=prompt("ingresa usuario");
let ingContraseña= prompt("ingresa contraseña");
let usuario = "ruben";
let contraseña ="blades";
let nombUser =(ingUsuario == usuario || ingUsuario == "carlito") //(VARIABLE BOOLEANA )se crea variable para ponerla directamente en el if, para que sea mas facil de leer
if( nombUser && ingContraseña == contraseña){
    alert("bienvenido señor " + ingUsuario)
}else{
    alert("intenta de nuevo")
}

let ingEdad = parseFloat(prompt("ingresa tu edad para saber si podes votar"))
let edadObligatoria= 18, edadOptativa=16, edadLimite= 69; //se separan con una "," las variables, ahorra codigo, es mas simple
if(ingEdad >= edadObligatoria && ingEdad <= edadLimite){
    alert("estas obligadisimo a votar querido")
}else if(ingEdad >= edadOptativa || ingEdad > edadLimite){
alert("podes votar si queres")
}else (ingEdad < edadOptativa)
{alert("no podes votar purrete")
} */

/* let ingreso=parseFloat(prompt("ingrese un numero para ser multiplicado je"));
if(isNaN(ingreso)){ //para validar que el valor que estas ingresando sea un numero o no 
    alert ("el valor ingresado no es un numero")
}else{
for(let i=0 ; i<=15 ;i++){
let resultado = ingreso * i;
console.log("el resultado de " + ingreso + " por " + i + " es " + resultado);
}}; */

/* let ingreso= parseInt(prompt("ingresa un numero"));
let esPrimo = true;
for(let i=2 ; i<ingreso; i++){
    if(ingreso % i === 0){
        console.log("ademas de dividir x 1 y por si mismo, divide por " + i);
        esPrimo=false
    }
}
if (esPrimo){
    alert(ingreso + " es primo")
}else{
    alert(ingreso + " no es primo")
} */
/* let secreto= "palabra"

for (let i=0 ; i<3 ; i++){
    let ingreso =prompt("adivina la palabra")
    if(ingreso == secreto){
        console.log("adivinaste");
        break;
    }else{
        console.log(ingreso + " no es la clave ");
    }
} */

/* for(let i=0 ; i<=10; i++){
    if(i%2 == 0){
console.log(i + " es par");
continue;
}
console.log(i);
}
console.log(0 == "0"); */

//while-------------------

/* let ingreso = prompt("ingresa un producto, si queres salir apreta 0")
while (ingreso != "0")//condicion para que funcione el bucle
{
    //codigo a ejecutar
    console.log("ingresaste " + ingreso + " para tu carrito");
    //condicion de salida
    ingreso = prompt("ingresa otro producto, si queres salir ingresa 0")
    
}
console.log("saliste del menu"); */

/* //switch
let ingreso = prompt("elegi una bebida \n 1.cafe \n 2.te \n 3.agua");
switch (ingreso) {
    case "1":
        alert("elegiste cafe")
            break;
            case "2":
                alert("elegiste te")
                    break; case "3":
                    alert("elegiste agua")
                        break;
    default:
        alert("opcion no valida")
        break;
}

let encuesta = prompt("que estilo musical te gusta? \n 1. Rock \n 2. Reggae \n 3. Jazz")
switch(encuesta){
    case "1":
        alert("rock")
        break;
        case "2":
            alert("reggae")
            break;
            case "3":
                alert("jazz")
                break;
                default:
                    alert("opcion no valida");
                    break;
} */
/* 
//funciones
//declaracion de una funcion
function saludar (){
    console.log("hola");
}
invocar o llamar
for(let i=0; i<5; i++){
    saludar()
}
 
let numero1= parseInt(prompt("ingresa un numero"))
let numero2= parseInt(prompt("ingresa otro numero"))
function suma(nro1, nro2){
    if(isNaN(nro1) || isNaN(nro2)){
        mensaje("no son numero")
    }else{
        mensaje("el resultado es " + (numero1 + numero2))
    }
}
function mensaje(mensaje){
    console.log(mensaje);
}
suma (numero1, numero2)
*/