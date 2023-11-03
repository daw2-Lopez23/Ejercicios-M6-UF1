document.addEventListener("DOMContentLoaded", function() {
  // Ejercicio 1: Generar un número aleatorio entre dos valores
  const enviarButton = document.getElementById('enviarButton');
  enviarButton.addEventListener('click', numRandom);

  function numRandom(event) {
      // Obtener los valores ingresados por el usuario
      const num1 = parseFloat(document.getElementById('num1').value);
      const num2 = parseFloat(document.getElementById('num2').value);
      
      // Generar un número aleatorio en el rango especificado
      const numRand = Math.floor(Math.random() * (num2 - num1 + 1) + num1);
      
      // Mostrar el número aleatorio en la página
      document.getElementById('numeroAleatorio').innerHTML = numRand;
  }

  // Ejercicio 2: Convertir texto a mayúsculas o minúsculas y buscar texto en el contenido
  document.getElementById("botonMayus").addEventListener("click", function () {
      // Obtener el texto ingresado por el usuario
      const texto = document.getElementById("texto").value;
      
      // Convertir el texto a mayúsculas
      document.getElementById("texto").value = texto.toUpperCase();
  });

  document.getElementById("botonMinus").addEventListener("click", function () {
      // Obtener el texto ingresado por el usuario
      const texto = document.getElementById("texto").value;
      
      // Convertir el texto a minúsculas
      document.getElementById("texto").value = texto.toLowerCase();
  });

  function generarResumen(texto) {
      // Dividir el texto en palabras
      const palabras = texto.split(/\s+/);

      // Mostrar las primeras 10 palabras en el resumen
      const primeras10Palabras = palabras.slice(0, 10).join(" ");
      return primeras10Palabras + (palabras.length > 10 ? " ..." : "");
  }

  document.getElementById("buscarTexto").addEventListener("click", function () {
      const texto = document.getElementById("texto").value;
      const textoBusqueda = document.getElementById("textoBusqueda").value;
      const textoMuestra = document.getElementById("textoMuestra");
      const resumen = document.getElementById("resumen");

      const palabras = texto.split(/\s+/);
      let coincidencias = 0;

      // Buscar y resaltar coincidencias en el texto
      for (let i = 0; i < palabras.length; i++) {
          if (palabras[i].toLowerCase() === textoBusqueda.toLowerCase()) {
              palabras[i] = `<span class="bg-primary text-light">${palabras[i]}</span>`;
              coincidencias++;
          }
      }

      // Mostrar el texto con las coincidencias resaltadas
      const textoResaltado = palabras.join(" ");
      textoMuestra.innerHTML = textoResaltado;

      // Mostrar la cantidad de coincidencias encontradas
      document.querySelector("p:nth-of-type(2)").innerHTML = `He encontrado <strong>${coincidencias}</strong> coincidencias`;

      // Generar un resumen del texto sin marcar coincidencias
      const resumenSinCoincidencias = generarResumen(texto);
      resumen.innerHTML = resumenSinCoincidencias;
  });

  // Ejercicio 3: Cambiar nombre y fecha
  const nombreInput = document.getElementById("nombre");
  const fechaInput = document.getElementById("fecha");
  const resultadoNombre = document.getElementById("nombreConvertido");
  const resultadoFecha = document.getElementById("fechaConvertida");

  function cambiarNombre() {
      // Obtener el nombre ingresado por el usuario y eliminar espacios en blanco al principio y al final
      const nombre = nombreInput.value.trim();
      
      // Sustituir espacios en blanco por guiones
      const nombreCambiado = nombre.replace(/\s+/g, "-");
      
      // Mostrar el nombre convertido en la página
      resultadoNombre.innerHTML = `Nombre convertido: <strong>${nombreCambiado}</strong>`;
  }

  function cambiarFecha() {
      // Obtener la fecha ingresada por el usuario
      const fecha = fechaInput.value;
      
      // Formatear la fecha como "dd-mm-aaaa"
      const fechaCambiada = fecha.split("/").reverse().join("-");
      
      // Mostrar la fecha convertida en la página
      resultadoFecha.innerHTML = `Fecha convertida: <strong>${fechaCambiada}</strong>`;
  }

  // Asignar eventos a los botones para procesar nombre y fecha
  const botonCambiarNombre = document.getElementById("convertirNombre");
  botonCambiarNombre.addEventListener("click", cambiarNombre);

  const botonCambiarFecha = document.getElementById("convertirFecha");
  botonCambiarFecha.addEventListener("click", cambiarFecha);

  // Ejercicio 4: Generar una contraseña aleatoria
  const contraseñaInput = document.getElementById("contraseña");
  const botonGenerarContraseña = document.getElementById("generarContraseña");

  botonGenerarContraseña.addEventListener("click", function () {
      const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      let nuevaContraseña = '';

      for (let i = 0; i < 10; i++) {
          const indiceAleatorio = Math.floor(Math.random() * letras.length);
          nuevaContraseña += letras.charAt(indiceAleatorio);
      }

      // Mostrar la contraseña generada en la página
      contraseñaInput.value = nuevaContraseña;
  });

  // Ejercicio 5: Mostrar un emoticono aleatorio
  const emojiDiv = document.getElementById("emoji");
  const botonGenerarEmoji = document.getElementById("generarEmoji");

  const emoticonos = ["🤖​", "🤡​", "🎃​", "​​🤑​", "😈​", "👾", "👺​", "👽​", "🤮​"];
  botonGenerarEmoji.addEventListener("click", function () {
      const indiceAleatorio = Math.floor(Math.random() * emoticonos.length);
      const emojiAleatorio = emoticonos[indiceAleatorio];
      
      // Mostrar el emoticono aleatorio en la página
      emojiDiv.textContent = emojiAleatorio;
  });
});
