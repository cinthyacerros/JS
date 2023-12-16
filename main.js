//Comentarios en JS
//alert('Hola mundo desde una alerta en JS')
 //consola
console.log('Hola desde consola')
//declaración  xd una variable
let nombre = "Cinthya";
 //concatenar texto y variable 
 console.log("Me llamo: ", nombre);
 //variables no pueden ser palabras reservadas
 //Al nombralas usaremos un nombre que te de idea de lo que estas almacenando.
 //constantes
 const pi = 3.1416;
 //tipos de datos
 //numero
 let edad = 20;
 //cadena de texto
 let saludo = "Hola";
 //Booleanos 2 valores
 let activo = true;

 //Operadores artimeticos
 //Suma
 //Resta
 //Multipliación
 //División
 //Modelo o residuo %
 //incremento ++
 //Decremento --

 //Operaciones relacionadas
 //mayor y menor que < >
 //mayor o igual >=
 //menor o igual <=
 //igual que ==
 //diferente de !=

 //Opeadores logicos
 //y &&
 //or  ||
 // not  !


 function currentTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    let time = hh + ":" + mm + ":" + ss;

    let reloj = document.querySelector('#reloj');
    reloj.innerHTML = time;
}


setInterval(currentTime, 1000);