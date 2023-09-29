let repetir = true
let contadorUno = 0
let contadorDos = 0
let contadorTres = 0
let contadorCuatro = 0
let contadorCinco = 0
let contadorSeis = 0
let contadorSiete = 0
let contadorOcho = 0
let contadorNueve = 0
let contadorDiez = 0

alert("Bienvenido al menú de ejercicios")



while(repetir){
    let opc = Number(prompt("Seleccione una de las siguientes opciones: \n1. Contador de numeros pares e impares. \n 2. Calculadora factorial \n 3. Validacion de contraseña\n 4. Generador de tablas de multiplicar\n 5. Adivina el numero.\n 6. Suma de numeros primos.\n 7. Secuencia de Fibonacci.\n 8. Convertidor de temperatura.\n 9. Calculadora de potencia\n 10. Juego de piedra, papel o tijeras\n 11. Salir"))
    switch(opc){
        case 1:
          let opcion = Number(prompt("Digite 1 si desea continuar y 2 si desea volver al menú. "))
          if (opcion == 1){
          contarParesImpares()
        }else{
          alert("Ha vuelto al menú")  
        }
        contadorUno++
        break
        case 2:
          let opcionUno = Number(prompt("Digite 1 si desea continuar y 2 si desea volver al menú. "))
          if (opcionUno == 1){
            factorial()
        }else{
          alert("Ha vuelto al menú")  
        }
        contadorDos++
        break
        case 3:
          let opcionDos = Number(prompt("Digite 1 si desea continuar y 2 si desea volver al menú. "))
          if (opcionDos == 1){
            validacionContraseña()
        }else{
          alert("Ha vuelto al menú")  
        }
        contadorTres++
        break
        case 4:
          let opcionTres = Number(prompt("Digite 1 si desea continuar y 2 si desea volver al menú. "))
          if (opcionTres == 1){
            alert("El ejercicio seleccionado te deja ingresar un numero y te muestra la tabla de multiplicacion de el numero ingresado.")
            let numero = Number(prompt('Ingrese el número de la tabla de multiplicar que desea ver'));
            TablaMultiplicar(numero);
        }else{
          alert("Ha vuelto al menú")  
        }
        contadorCuatro++

        break
        case 5:
          let opcionCuatro = Number(prompt("Digite 1 si desea continuar y 2 si desea volver al menú. "))
          if (opcionCuatro == 1){
            adivinarNumero()
        }else{
          alert("Ha vuelto al menú")  
        }
        contadorCinco++

        break
        case 6:
          let opcionCinco = Number(prompt("Digite 1 si desea continuar y 2 si desea volver al menú. "))
          if (opcionCinco == 1){
            sumaPrimosHastaN()
        }else{
          alert("Ha vuelto al menú")  
        }
        contadorSeis++

        break
        case 7:
          let opcionSeis = Number(prompt("Digite 1 si desea continuar y 2 si desea volver al menú. "))
          if (opcionSeis == 1){
            fibonacci(termino)
        }else{
          alert("Ha vuelto al menú")  
        }
        contadorSiete++

        break
        case 8:
          let opcionSiete = Number(prompt("Digite 1 si desea continuar y 2 si desea volver al menú. "))
          if (opcionSiete == 1){
            temperatura()
        }else{
          alert("Ha vuelto al menú")  
        }
        contadorOcho++

        break
        case 9:
          let opcionOcho = Number(prompt("Digite 1 si desea continuar y 2 si desea volver al menú. "))
          if (opcionOcho == 1){
            potencia ()
        }else{
          alert("Ha vuelto al menú")  
        }
        contadorNueve++

        break
        case 10:
          let opcionNueve = Number(prompt("Digite 1 si desea continuar y 2 si desea volver al menú. "))
          if (opcionNueve == 1){
            jugarPiedraPapelTijeras(eleccionUsuario)
        }else{
          alert("Ha vuelto al menú")  
        }
        contadorDiez++

        break
        case 11:
        
        console.log("El ejercicio #1 =>  Contador de numeros pares e impares se ha ejecutado: "+contadorUno+" veces")
        console.log("El ejercicio #2 =>  Calculadora factorial: "+contadorDos+" veces")
        console.log("El ejercicio #3 =>  Validacion de contraseña: "+contadorTres+" veces")
        console.log("El ejercicio #4 =>  Generador de tablas de multiplicar: "+contadorCuatro+" veces")
        console.log("El ejercicio #5 =>  Adivina el numero: "+contadorCinco+" veces")
        console.log("El ejercicio #6 =>  Suma de numeros primos: "+contadorSeis+" veces")
        console.log("El ejercicio #7 =>  Secuencia Fibonacci: "+contadorSiete+" veces")
        console.log("El ejercicio #8 =>  Convertidor de temperatura: "+contadorOcho+" veces")
        console.log("El ejercicio #9 =>  Calculadora de potencia: "+contadorNueve+" veces")
        console.log("El ejercicio #10 >= Juego de piedra, papel o tijeras: "+contadorDiez+" veces")

        Salir()

        break
        default:
            console.log("Error al digitar el numero: ")
    }
}
//--------------------------------------------------------------------------------------------------------//
//Numero 1
function contarParesImpares() {
  alert("El ejercicio seleccionado tiene la funcionalidad de contar los numeros pares e impares del numero seleccionado.")
  let numeroUsuario =   Number(prompt("Ingrese un número:"))

    let pares = 0
    let impares = 0

    for (let i = 1; i <= numeroUsuario; i++) {
      if (i % 2 == 0) {
        pares++
      } else {
        impares++
      }
    }
    console.log("El numero seleccionado es: "+numeroUsuario)
    console.log("Cantidad de números pares: "+pares)
    console.log("Cantidad de números impares: "+impares)
  }
//--------------------------------------------------------------------------------------------------------//
//Numero 2

function factorial(){
  alert("El ejercicio seleccionado, se llama calculadora factorial, osea multiplica todos los numeros desde el 1 hasta el numero ingresado.")
  let numeroFactorial = Number(prompt("Ingrese un número para calcular su factorial:"))
  let factorial = 1

  for (let i = 1; i <= numeroFactorial; i++) {
      factorial *= i
    }
    console.log("El factorial de "+numeroFactorial+" es: "+factorial)
  }
//--------------------------------------------------------------------------------------------------------//
//Numero 3
function validacionContraseña(){
  alert("Este compartimiento es secreto, si ingresa la contraseña correcta puede acceder")
  let contraseña = prompt("Ingrese la contraseña: ")
  if (contraseña == "secreto123"){
    alert("Ha accedido al compartimiento secreto.")
  }else{
    alert ("Contraseña no valida.")
  }

}
//--------------------------------------------------------------------------------------------------------//
//Numero 4              !FUNCION CON PARAMETRO!

function TablaMultiplicar(numero) {
  for (var i = 1; i <= 10; i++) {
    console.log('La tabla de multiplicar ingresada es ' + numero + ' x ' + i + ' = ' + (numero * i));
  }
}
//--------------------------------------------------------------------------------------------------------//
//Numero 5
function adivinarNumero(){
  alert("Usted ha ingresado a un minijuego, se trata de adivinar un numero aleatorio del 1 al 100.")
  let numeroAleatorio = Math.floor (Math.random()*100)
  let rep = true
  while(rep){
  let numeroUsua = Number(prompt("Ingrese un numero del 1 al 100: "))
  if(numeroUsua == numeroAleatorio){
    alert("Felicidades has acertado el numero! "+numeroAleatorio)
    rep=false
  }else if(numeroUsua > numeroAleatorio){
    alert("Mas abajo!")
  }else{
    alert("Más arriba!")
  }
}


}

//--------------------------------------------------------------------------------------------------------//
//Numero 6 


function sumaPrimosHastaN() {
  alert("El ejercicio seleccionado suma los numeros primos desde el 1 hasta el numero que usted desee. ")
  let N = Number(prompt("Ingrese el numero hasta el cual quiere que se sumen los numeros primos: "))
  let suma = 0;

  function esPrimo(num) {
      for(let i = 2; i < num; i+=num)
          if(num % i === 0) return false;
      return num > 1;
  }

  for(let i = 2; i <= N; i++) {
      if(esPrimo(i)) {
          suma += i;
      }
  }
  console.log(suma)
}




//--------------------------------------------------------------------------------------------------------//
//Numero 7
function fibonacci(termino) {
  alert (" El ejercicio seleccionado hace una secuencia de fibonacci osea suma el numero actual con el anterior. ")

  if (termino == 0) return []
  if (termino == 1) return [0]

  let secuencia = [0, 1]

  for (let i = 2; i < termino; i++) {
    secuencia[i] = secuencia[i - 1] + secuencia[i - 2]
  }

  return secuencia
}

let terminoUsuario = Number(prompt("Ingrese un numero para generar la secuencia de Fibonacci:"))
console.log(fibonacci(terminoUsuario))

//--------------------------------------------------------------------------------------------------------//
//Numero 8

function temperatura(){
  alert("El ejercicio seleccionado convierte temperatura en grados celsius a Fahrenheit o viceversa.")
let repeticiones = true
  
while(repeticiones){
    let opc = Number(prompt("Elija la conversión que desea hacer:\n1. Celsius a Fahrenheit\n2. Fahrenheit a Celsius \n3. Salir"));
 switch(opc){
    case 1:{
    let celsius = Number(prompt("Ingrese la temperatura en grados Celsius:"));
      console.log( celsius + ' grados Celsius son equivalentes a ' + ((celsius * 9/5) + 32)+ ' grados Fahrenheit.');}
    break
    case 2:{
    let fahrenheit = Number(prompt("Ingrese la temperatura en grados Fahrenheit:"));
      console.log(fahrenheit + ' grados Fahrenheit son equivalentes a ' + ((fahrenheit - 32) * 5/9) + ' grados Celsius.');
  } break
    case 3:
    repeticiones = false
    break
    default:
        console.log("Ingrese una opcion valida ")
  }
}
}
//--------------------------------------------------------------------------------------------------------//
//Numero 9
function potencia (){
  alert("El ejercicio seleccionado te ayuda encontrar la potencia de cualquier numero. ")
  let numeroPotencia= Number(prompt("Ingrese el numero de la base: "))
  let potenciaUsuario = Number(prompt("Ingrese el numero el numero del exponente: "))
  let resultado = numeroPotencia ** potenciaUsuario
  console.log("El resultado es: "+resultado)
}

//--------------------------------------------------------------------------------------------------------//
//Numero 10

function jugarPiedraPapelTijeras(eleccionUsuario) {
  alert("Usted ha ingresado a un minijuego, se trata de unjuego en el que usted juega contra la computadora eligiendo entre piedra, papel o tijeras, el programa determina al ganador. \nBUENA SUERTE ")
  let elecciones = ["piedra", "papel", "tijeras"];
  let eleccionComputadora = Math.floor(Math.random() * 3);

  let resultado = determinarGanador(eleccionUsuario, elecciones[eleccionComputadora]);

  mostrarResultado(eleccionUsuario, elecciones[eleccionComputadora], resultado);
}

function determinarGanador(eleccionUsuario, eleccionComputadora) {
  if (eleccionUsuario === eleccionComputadora) {
    return "¡Es un empate!"
  } else if (
    (eleccionUsuario === "piedra" && eleccionComputadora === "tijeras") || (eleccionUsuario === "papel" && eleccionComputadora === "piedra") || (eleccionUsuario === "tijeras" && eleccionComputadora === "papel")) {
    return "¡Ganaste!"
  } else {
    return "¡La computadora ganó!"
  }
}

function mostrarResultado(eleccionUsuario, eleccionComputadora, resultado) {
  alert("Elegiste: " +eleccionUsuario+ "\n"+ "La computadora eligió: "+ eleccionComputador+"\n"+ Resultado+ " resultado");
}

let eleccionUsuario = prompt("Elige piedra, papel o tijeras").toLowerCase();
if (eleccionUsuario === "piedra" || eleccionUsuario === "papel" || eleccionUsuario === "tijeras"){
  jugarPiedraPapelTijeras(eleccionUsuario)
} else{
  alert("Eleccion inválida. Por favor, elige piedra, papel o tijeras.")
}
//--------------------------------------------------------------------------------------------------------//
//Numero 11          !FUNCION CON RETORNO!

function Salir(){
  repetir = false
  return repetir
}


