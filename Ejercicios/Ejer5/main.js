// Selección de elementos del DOM para los botones de tirada de dados y contadores de posiciones
const dado1 = document.querySelector("#tiradaJ1");
const dado2 = document.querySelector("#tiradaJ2");
let contador1 = 1; // Contador de posición del Jugador 1
let contador2 = 1; // Contador de posición del Jugador 2

// Agregar event listeners a los botones de tirada de dados
dado1.addEventListener("click", j1);
dado2.addEventListener("click", j2);

// Función para manejar la tirada del dado del Jugador 1
function j1() {
    // Obtener el selector de la casilla actual del Jugador 1
    let posicion = `#casillas1 #c${contador1}`;
    // Borrar el contenido de la casilla actual
    document.querySelector(posicion).innerHTML = "";

    // Generar un número aleatorio para simular el lanzamiento de un dado
    let numRand = Math.random();
    numRand = numRand * 6 + 1;
    numRand = Math.floor(numRand);
    // Actualizar la posición del Jugador 1
    contador1 = contador1 + numRand;

    // Comprobar si el Jugador 1 ha coincidido con el Jugador 2
    if (contador1 == contador2) {
        // Retroceder al principio si ambos jugadores han coincidido
        let atras = `<div class="ficha jugador1"></div>`;
        contador1 = 1;
        document.querySelector(`#casillas1 #c1`).innerHTML = atras;
    } else {
        // Avanzar a la siguiente casilla y actualizar la ficha del Jugador 1
        let avanza = `<div class="ficha jugador1"></div>`;
        let letra = "c";

        // Comprobar si el Jugador 1 ha llegado al final del tablero
        if (contador1 > 20) {
            let resta1 = contador1 - 20;
            contador1 = 20 - resta1;
        }
        let id = letra + contador1;
        document.querySelector(`#casillas1 #${id}`).innerHTML = avanza;

        // Comprobar si el Jugador 1 ha ganado
        if (contador1 == 20) {
            alert("Ha ganado el Jugador 1");
            // Reiniciar los tableros y los contadores
            document.querySelector(`#casillas1 #c1`).innerHTML = `<div class="ficha jugador1"></div>`;
            document.querySelector(`#casillas2 #b1`).innerHTML = `<div class="ficha jugador2"></div>`;
            document.querySelector(`#casillas2 #b${contador2}`).innerHTML = " ";
            contador1 = 1;
            contador2 = 1;
        }
    }
}
// Función para manejar la tirada del dado del Jugador 2
function j2() {
    // Obtener el selector de la casilla actual del Jugador 2
    let posicion = `#casillas2 #b${contador2}`;

    // Borrar el contenido de la casilla actual
    document.querySelector(posicion).innerHTML = "";

    // Generar un número aleatorio para simular el lanzamiento de un dado
    let numRand = Math.random();
    numRand = numRand * 6 + 1;
    numRand = Math.floor(numRand);

    // Actualizar la posición del Jugador 2
    contador2 = contador2 + numRand;

    // Comprobar si el Jugador 2 ha coincidido con el Jugador 1
    if (contador2 == contador1) {
        // Retroceder al principio si ambos jugadores han coincidido
        let atras = `<div class="ficha jugador2"></div>`;
        contador2 = 1;
        document.querySelector(`#casillas2 #b1`).innerHTML = atras;
    } else {
        // Avanzar a la siguiente casilla y actualizar la ficha del Jugador 2
        let avanza = `<div class="ficha jugador2"></div>`;
        let letra = "b";
        // Comprobar si el Jugador 2 ha llegado al final del tablero
        if (contador2 > 20) {
            let resta2 = contador2 - 20;
            contador2 = 20 - resta2;
        }
        let id = letra + contador2;
        document.querySelector(`#casillas2 #${id}`).innerHTML = avanza;

        // Comprobar si el Jugador 2 ha ganado
        if (contador2 == 20) {
            alert("Ha ganado el Jugador 2");
            // Reiniciar los tableros y los contadores
            document.querySelector(`#casillas2 #b1`).innerHTML = `<div class="ficha jugador2"></div>`;
            document.querySelector(`#casillas1 #c1`).innerHTML = `<div class="ficha jugador1"></div>`;
            document.querySelector(`#casillas1 #c${contador1}`).innerHTML = " ";
            contador1 = 1;
            contador2 = 1;
        }
    }
}
