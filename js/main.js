function saludo() {
    alert("Hola Mundo!!")
}

function suma() {
    // DECLARAMOS LAS VARIABLES NECESARIAS
    let A = 0;
    let B = 0;
    let S = 0;
    // SOLICITAMOS LOS VALORES Y LOS ASIGNAMOS EN LAS VARIABLES
    A = parseInt(prompt("Por favor ingrese el primer valor  sumar"));
    B = parseInt(prompt("Por favor ingrese el segundo valor"));
    //REALIZAMOS LAS OPERACIONES NECESARIAS
    S = A + B;
    //MOSTRAMOS EL RESULTADO EN PANTALLA
    alert("El resultado de la suma es:" + S);
    console.log("El resultado de la suma es:" + S);

}

function opBasicas() {
    let N1 = 0;
    let N2 = 0;
    let S = 0;
    let R = 0;
    let M = 0;
    let D = 0;
    N1 = parseInt(prompt("POR FAVOR INGRESO EL PRIMER VALOR:"));
    N2 = parseInt(prompt("POR FAVOR INGRESE EL SEGUNDO VALOR:"));
    S = N1 + N2;
    R = N1 - N2;
    M = N1 * N2;
    D = N1 / N2;
    alert ("EL RESULTADO DE LA SUMA ES: "+ S +" EL RESULTADO DE LA RESTA ES: " + R +" EL RESULTADO DE LA MULTIPLACION ES: " + M +" EL RESULTADO DE LA DIVISION ES: " + D)
    console.log("EL RESULTADO DE LA SUMA ES: "+ S +" EL RESULTADO DE LA RESTA ES: " + R + " EL RESULTADO DE LA MULTIPLICACION ES: " + M + "EL RESULTADO DE LA DIVISION ES: " + D)
}
function convMedidas() {
    let M = 0;
    let CM= 0;
    let P = 0;
    M = parseInt(prompt("INGRESE EL VALOR EN METROS: "));
    CM = M*100
    P = M*39.37
    alert("LOS VALORES EN CENTRIMOS SON: "+ CM + " Y EL VALOR EN PULGADAS SON: "+ P)
}
function calcularPromedio() {
    let M ="";
    let A,B,C,D,F,G,P = 0;
    M = prompt("Difite el nombre de la materia");
    A = parseInt(prompt("DIGITE LA PRIMERA NOTA: "));
    B = parseInt(prompt("DIGITE LA SEGUNDA NOTA: "));
    C = parseInt(prompt("DIGITE LA TERCERA NOTA: "));
    D = parseInt(prompt("DIGITE LA CUARTA NOTA: "));
    E = parseInt(prompt("DIGITE LA QUINTA NOTA: "));
    F = parseInt(prompt("DIGITE LA SEXTA NOTA: "));
    G = parseInt(prompt("DIGITE LA SEPTIMA NOTA: "));
    P = (A+B+C+D+E+F+G)/7;
    if (P>=6.0) {
        alert("EL ESTUDIANTE APROBO "+ M +" CON: "+P);
    } else {
        alert("EL ESTUDIANTE REPROBO "+ M +" CON: "+P);
    }
}

// Encontrar el mayor numero
function mayorDedosnumeros() {
    // Solicitar al usuario que ingrese dos números
    let numero1 = parseFloat(prompt("Ingrese el primer número:"));
    let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
  
    // Verificar si los valores ingresados son números válidos
    if (isNaN(numero1) || isNaN(numero2)) {
      alert("Por favor, ingrese números válidos.");
      return;
    }
  
    // Comparar los números para encontrar el mayor
    let mayor;
    if (numero1 > numero2) {
      mayor = numero1;
    } else if (numero2 > numero1) {
      mayor = numero2;
    } else {
      alert("Los números son iguales, no sea pato");
      return;
    }
    // Mostrar el número mayor como un mensaje de alerta
    alert("El número mayor es: " + mayor);
  }

function areaTriangulo(){
// Solicitar al usuario que ingrese la base del triángulo
var base = parseFloat(prompt("Ingresa la longitud de la base del triángulo:"));

// Solicitar al usuario que ingrese la altura del triángulo
var altura = parseFloat(prompt("Ingresa la altura del triángulo:"));

// Calcular el área del triángulo
var area = (base * altura) / 2;

// Mostrar el área del triángulo
alert("El área del triángulo con base " + base + " y altura " + altura + " es: " + area);
}

// Elevar al cuadrado

function cuadradoNumero() {
    // Solicitar al usuario que ingrese un número
    let numero = parseInt(prompt("Ingrese un número:"));
  
    // Verificar si el valor ingresado es válido
    if (isNaN(numero)) {
      alert("Por favor, ingrese un número válido.");
      return;
    }
  
    // Calcular el cuadrado del número
    let cuadrado = numero * numero;
  
    // Mostrar el resultado como un mensaje de alerta
    alert("El cuadrado de " + numero + " es: " + cuadrado);
  }

function numeroMenor() {
// Solicitar al usuario que ingrese tres números
var numero1 = parseFloat(prompt("Ingresa el primer número:"));
var numero2 = parseFloat(prompt("Ingresa el segundo número:"));
var numero3 = parseFloat(prompt("Ingresa el tercer número:"));

// Determinar cuál es el menor de los tres números
if (numero1 <= numero2 && numero1 <= numero3) {
    alert("El primer número (" + numero1 + ") es el menor.");
} else if (numero2 <= numero1 && numero2 <= numero3) {
    alert("El segundo número (" + numero2 + ") es el menor.");
} else {
    alert("El tercer número (" + numero3 + ") es el menor.");
}}


function inversionBanco() {
// Solicitar al usuario la cantidad de dinero inicial y la cantidad de años
var montoInicial = parseFloat(prompt("Ingrese la cantidad de dinero inicial:"));
var años = parseInt(prompt("Ingrese la cantidad de años de inversión:"));

// Calcular la tasa de interés mensual en decimal
var tasaInteresMensual = 0.017; // 1.7% en decimal

// Calcular el número total de períodos (meses)
var meses = años * 12;

// Calcular el monto total al final del período usando la fórmula del interés compuesto
var montoFinal = montoInicial * Math.pow((1 + tasaInteresMensual), meses);

// Mostrar el monto final al usuario
alert("Después de " + años + " años, con una tasa de interés del 1.7% mensual, el monto final será: " + montoFinal.toFixed(2));
}



function añoDenacimiento() {
// Obtener el año actual
var añoActual = new Date().getFullYear();

// Solicitar al usuario que ingrese su edad
var edad = parseInt(prompt("Ingresa tu edad:"));

// Calcular el año de nacimiento restando la edad del año actual
var añoNacimiento = añoActual - edad;

// Mostrar el año de nacimiento al usuario
alert("Naciste en el año: " + añoNacimiento);
}


function numeroPar() {
// Solicitar al usuario que ingrese un número
var numero = parseInt(prompt("Ingresa un número:"));

// Verificar si el número es par o impar
if (numero % 2 === 0) {
    alert("El número " + numero + " es par.");
} else {
    alert("El número " + numero + " es impar.");
}}

// FRUTERIA EL EJERCICIO MAS LARGO :

function ejercicioFruteria() {
    let p, d, pr, k, tp;
    let fr;
  
    p = 0;
    d = 0;
    pr = 0;
    k = 0;
    tp = 0;
  
    fr = prompt("Escribe la fruta a comprar");
    k = parseFloat(prompt("Escribe la cantidad en kilos:"));
    p = parseFloat(prompt("Escribe el precio por kilo:"));
  
    switch (fr) {
      case "manzana":
        switch (true) {
          case k < 3:
            pr = k * p;
            d = pr * 0.02;
            tp = pr - d;
            break;
          case k < 6:
            pr = k * p;
            d = pr * 0.04;
            tp = pr - d;
            break;
          case k < 17:
            pr = k * p;
            d = pr * 0.1;
            tp = pr - d;
            break;
        }
        break;
  
      case "pera":
        switch (true) {
          case k < 3:
            pr = k * p;
            d = pr * 0.02;
            tp = pr - d;
            break;
          case k < 6:
            pr = k * p;
            d = pr * 0.04;
            tp = pr - d;
            break;
          case k < 17:
            pr = k * p;
            d = pr * 0.1;
            tp = pr - d;
            break;
        }
        break;
  
      case "sandia":
        switch (true) {
          case k < 3:
            pr = k * p;
            d = pr * 0.02;
            tp = pr - d;
            break;
          case k < 6:
            pr = k * p;
            d = pr * 0.04;
            tp = pr - d;
            break;
          case k < 17:
            pr = k * p;
            d = pr * 0.1;
            tp = pr - d;
            break;
        }
        break;
  
      default:
        alert(
          "La fruta ingresada no está disponible. Por favor, elija manzana, pera o sandía."
        );
        return; // Salir de la función si no se eligió una fruta válida
    }
  
    alert(
      "El valor del descuento es: $" +
        d.toFixed(2) +
        " pesos. El valor total a pagar es: $" +
        tp.toFixed(2) +
        " pesos"
    );
  }