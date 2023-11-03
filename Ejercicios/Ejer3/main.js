console.log("hola");

// Escuchar el evento de hacer clic en el botón "Crear"
botonCrear.addEventListener('click', crear);

function crear(event) {
    // Prevenir el comportamiento predeterminado del formulario
    event.preventDefault();
    // Obtener los elementos del formulario por sus IDs
    const nombre = document.querySelector('#name');
    const apellido1 = document.querySelector('#apellido1');
    const apellido2 = document.querySelector('#apellido2');
    const DNI = document.querySelector('#DNI');

    // Obtener los elementos en los que se mostrará la información de la carta
    const nombreCarta = document.querySelector('#nombreCarta');
    const apellido1Carta = document.querySelector('#apellidoCarta');
    const apellido2Carta = document.querySelector('#apellido2Carta');
    const DNICarta = document.querySelector('#DNICarta');

    // Obtener los valores ingresados por el usuario
    const nombreF = nombre.value;
    const apellido1F = apellido1.value;
    const apellido2F = apellido2.value;
    const dniF = DNI.value;

    // Mostrar los valores en la carta
    nombreCarta.innerHTML = nombreF;
    apellido1Carta.innerHTML = apellido1F;
    apellido2Carta.innerHTML = apellido2F;
    DNICarta.innerHTML = dniF;

    // Crear una base de datos simulada (arreglo) y agregar el usuario
    const bd = [];
    const usuario = {
        nombre: nombreF,
        apellido1: apellido1F,
        apellido2: apellido2F,
        dni: dniF
    };
    bd.push(usuario);
    // Generar una tabla con los usuarios en la base de datos
    let tabla = `<table>`;
    bd.forEach(element => {
        tabla += `<tr><td style="border: 1px solid">${element}<td></tr>`;
    });
    tabla += `</table>`;
    // Mostrar la tabla en la página
    document.querySelector('#tablaUser').innerHTML = tabla;
}
