// 1er clase-------sintaxis y variables-------------------------------------------------
/* let consulta = prompt("quien sos?")
let respuesta = alert(consulta + " jajaja")
//let adivinanza = prompt("quien fue dios alguna vez?")
let ingreso = parseFloat(prompt("ingresa un numero"))
let ingresoDos = parseFloat(prompt("ingresa otr numero"))
let pregunta = prompt("queres saber si es verdad que se sumaron??")
if(pregunta == "si"){
    alert ("ah picaron")
}else{
    alert ( ingreso + ingresoDos + " fue lo ingresado y sumado")
}

let saludo = alert ("adiossssss")
 


let num1= parseFloat(prompt("ingresa un numero"));
let num2= parseFloat(prompt("ingresa otro numero"));
console.log(num1);
console.log(num2);
let resultado = num1+num2;
alert("la suma fue de " + resultado)
*/
//2da clase  control de flujos ----------------------------------------------------------
/* 
let temperatura = prompt("cuantos grados hacen?")
if(temperatura < 23){
    alert("ta fresco");
}else{
    alert("hace calo");
}
 let usuario = prompt("ingresa tu usuario")
 if(usuario != ""){
    alert("bienvenido " + usuario)
 }else{
    alert("no pusiste na")
 }
 let num =prompt("ingress edad")
 let mayor = num >= 18 ; //variable booleana
 if(mayor){
    alert("bienvenido")
 }else{
    alert("chau")
 } 
 let precio =prompt("ingresa precio");
 if(precio < 100){
    alert("precio menor a 100")
 }else if(precio<150){
    alert("precio menor a 150")
 }else{
    alert("el precio es " + precio)
 }

 let usrSaved= "juanito"
 let pswSaved = "hola"
 let usr = prompt("ingresa tu usuario")
 let psw = prompt("ingresa tu contraseña")
 let nombreUsr = (usrSaved == usr || usr == "ruben")
 if( nombreUsr && pswSaved == psw){
    alert("bienvenido Sr. " + usr)
 }else{
    alert("usuario y/o contraseña incorrecta")
 }
 
let edadObligatoria= 18, edadOptativa= 16, edadLimite = 69
let edadUsuario = parseFloat(prompt("ingresa tu edad"))
if(edadUsuario >= edadObligatoria && edadUsuario <= edadLimite){
    alert("estas obligado a votar")
}else if(edadUsuario >= edadOptativa || edadUsuario>edadLimite){
    alert("podes votar si queres")
}else{
    alert("no podes votar aun")
}
*/

//3er clase ---Ciclos e interacciones --------------------------------------
//for(desde; hasta; actualizacion)
/* 
for(let i= 0; i < 3 ; i++){
    alert("llegamos?");
    alert("no")
}
alert("A VER? SI YA LLEGAMO")


alert("podes hacer 3 preguntas")
alert("que bueno xq solo necesito 1")
let respuesta = "";
 for(let i= 0 ; i<3 ; i++){
   let pregunta= prompt("")
   if(pregunta != "usted?"){
      respuesta= "si"
      alert(respuesta)
      
   }else{
      respuesta = "si asi es, bla bla"
      alert(respuesta)
   }
 } 
 let ingresaNum= parseFloat(prompt("ingresa un numero para multiplicar"))
 for(let i= 1 ; i <= 10 ; i++){
   if(isNaN(ingresaNum)){
      alert("no ingresaste un un numero")
      break;
   }else{
  let resputas = (ingresaNum * i);
   console.log("el resultado de" + ingresaNum +" x " + i + " es igual a : " + resputas);}
 }
 */

 let ingreso = parseInt(prompt("ingresa un numero pra saber si es cousin"))
 let esprimo = true;
 for(let i= 2 ; i<ingreso ; i++){
   if(ingreso% i === 0){
      console.log("ademas de dividir x 1, por si mismo, tmb divide por " + i);
      esprimo=false;  
   }
 }
if(esprimo){
   alert( ingreso + " es primo")
}else{
   alert(ingreso + " no es primo")
}