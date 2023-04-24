//Calcular promedio de notas
const notaString = prompt("Ingresa las notas separadas por comas:");

const notas = notaString.split(",").map(Number);

let suma = 0;

//Ciclo-condicional
for(let i = 0; i < notas.length; i++) {
  suma += notas[i];
}

//Funcion flecha
const promedio = (sumatoria, cantidad) => {
    return (suma / notas.length);
}

let resultado = promedio(suma, notas.length);

// Imprimir el resultado
alert(`El promedio es: ${resultado}`);
