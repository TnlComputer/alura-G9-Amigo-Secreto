// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


// Desafío: Creo un sorteo de los amigos
let amigos = [];

// Agrega un amigo a la lista
function agregarAmigo() {
  let nombre = document.getElementById("amigo").value.trim();

  if (nombre === "") {
    alert("Por favor, ingresa un nombre de un amigo válido.");
    return;
  }

  // Normalizo el nombre: primera letra mayúscula, resto minúsculas
  const nombreNormalizado = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();

  // Verifico si ya existe en el array
  const yaExiste = amigos.includes(nombreNormalizado);

  if (yaExiste) {
    alert("Ese amigo ya está en la lista.");
    return;
  }

  amigos.push(nombreNormalizado);
  mostrarAmigos();
  document.querySelector('#amigo').value = '';
}


// Muestro amigos ingresados en la lista
function mostrarAmigos() {
  const listaAmigos = document.getElementById("listaAmigos");

  // Limpia la lista antes de mostrar la los amigos ingrsados
  listaAmigos.innerHTML = "";

  if (amigos.length === 0) {
    console.log("No hay nombres de amigos en la lista");
    return;
  }

  amigos.forEach((amigo, index) => {
    const li = document.createElement("li");
    const nombreCapitalizado = amigo.charAt(0).toUpperCase() + amigo.slice(1).toLowerCase();
    li.textContent = `${nombreCapitalizado}`;
    listaAmigos.appendChild(li);
  });

}

// sorteo el amigo secreto y lo muestro en un alert y si no hay amigos otro alert con un mensaje.
function sortearAmigo() {
  const listaAmigos = document.getElementById("listaAmigos");

  // Borrar la lista mostrada
  listaAmigos.innerHTML = "";

  if (amigos.length === 0) {
    alert("No hay nombres de amigos para sortear");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];

  // reemplazo el nombre a la primer letra mayuscula y el resto en minuscula
  const nombreCapitalizado = amigoSorteado.charAt(0).toUpperCase() + amigoSorteado.slice(1).toLowerCase();

  const resultado = document.getElementById("resultado");
  const li = document.createElement("li");
  li.textContent = `🎊 ¡Felicitaciones! El amigo sorteado es: ${nombreCapitalizado}`;
  resultado.appendChild(li);

  // deshabilito el boton de sortear parta que no se pueda sortear mas de una vez
  document.querySelector(".button-draw").disabled = true;
}

function reiniciarJuego() {
  amigos = []; // Vacía la lista de amigos

  // Limpia las listas del DOM
  document.getElementById("listaAmigos").innerHTML = "";
  document.getElementById("resultado").innerHTML = "";

  // Reactiva el botón de sorteo
  document.querySelector(".button-draw").disabled = false;

  // Limpia el input
  document.querySelector('#amigo').value = '';

  alert("¡El juego ha sido reiniciado!");
}
