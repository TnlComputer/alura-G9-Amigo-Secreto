// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


// Desafío: Creo un sorteo de los amigos
let amigos = [];

// Agrega un amigo a la lista
function agregarAmigo() {
  let nombre = document.getElementById("amigo").value;

  if (nombre.trim() === "") {
    alert("Por favor, ingresa un nombre de un amigo válido.");
    return;
  }
  amigos.push(nombre);
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
}

