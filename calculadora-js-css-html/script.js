// Obtener referencias a los elementos del DOM
const display = document.getElementById('display');
const numeros = document.querySelectorAll('.numero');
const operadores = document.querySelectorAll('.operador');
const borrarBtn = document.getElementById('borrar');
const calcularBtn = document.getElementById('calcular');


// Variables para almacenar los números y operadores
let numero1 = '';
let numero2 = '';
let operador = '';

// Agregar eventos a los botones de números
numeros.forEach(numero => {
    numero.addEventListener("click", () => {
        numero2 += numero.textContent
        display.value = numero2
    })
});

operadores.forEach(operadorBtn => {
    operadorBtn.addEventListener("click", () => {
        operador = operadorBtn.textContent
        numero1 = numero2
        numero2 = ""

    })
})


borrarBtn.addEventListener("click", () => {
    numero2 = ""
    display.value = numero2
})


const operaciones = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b
};

calcularBtn.addEventListener('click', function () {
    let resultado = operaciones[operador](parseFloat(numero1), parseFloat(numero2));
    display.value = resultado;
    numero1 = resultado.toString();
    numero2 = '';
});