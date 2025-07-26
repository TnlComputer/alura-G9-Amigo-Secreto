// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


// Desafío: Crear un juego de amigos
// Instrucciones:
// 1. Crea un array vacío llamado `amigos`.
// 2. Crea una función `agregarAmigo(nombre)` que agregue un amigo al array `amigos`.
// 3. Crea una función `actualizarAmigo(indice, nuevoNombre)` que actualice el nombre de un amigo en el array `amigos` según su índice.
// 4. Crea una función `sortearAmigos()` que seleccione un amigo al azar del array `amigos` y lo <retorne className=""></retorne>
// 5. Crea una función `mostrarAmigos()` que muestre todos los amigos en el array `amigos`.
// 6. Crea una función `reiniciarJuego()` que vacíe el array `amigos` y muestre un mensaje indicando que el juego ha sido reiniciado.
// Ejemplo de uso:
// agregarAmigo("Juan");  // agregarAmigo("María");
// agregarAmigo("Pedro"); // mostrarAmigos(); // 1. Juan, 2. María, 3. <Pedro></Pedro>
// actualizarAmigo(1, "Ana"); // sortearAmigos(); // Retorna un amigo al azar
// mostrarAmigos(); // 1. Juan, 2. Ana, 3. <Pedro></Pedro>  
// reiniciarJuego(); // El juego ha sido reiniciado. La lista de amigos está vacía.
// Nota: Asegúrate de manejar los casos en los que el índice esté fuera de rango o el array esté vacío className="" 
// para evitar errores.
// No es necesario utilizar ningún framework o librería externa, solo JavaScript puro.
// Puedes probar tu código en un entorno de JavaScript o en la consola del navegador.
// ¡Buena <suerte!> </suerte!>  


let amigos = [];

// Funciones para manejar la lista de amigos
// Agrega un amigo al array
function agregarAmigo() {
  let nombre = document.getElementById("amigo").value;
  if (nombre.trim() === "") {
    alert("Por favor, ingresa un nombre válido.");
    return;
  }
  console.log(nombre);
  amigos.push(nombre);
  console.log(amigos)
  limpiarNombre();
}

console.log(amigos);
function actualizarAmigo(indice, nuevoNombre) {
  if (indice >= 0 && indice < amigos.length) {
    amigos[indice] = nuevoNombre;
    alert("¡Hiciste clic en el botón!");
  } else {
    console.log("Índice fuera de rango");
  }
}

function sortearAmigos() {
  if (amigos.length === 0) {
    console.log("No hay amigos para sortear");
    return;
  }
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  return amigos[indiceAleatorio];
}

function mostrarAmigos() {
  if (amigos.length === 0) {
    console.log("No hay amigos en la lista");
    return;
  }
  amigos.forEach((amigo, index) => {
    console.log(`${index + 1}. ${amigo}`);
  });
}


function limpiarNombre() {
  document.querySelector('#amigo').value = '';
}
