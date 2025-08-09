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

  // Validación: solo letras, espacios, tildes, ñ, guiones o apóstrofes
  const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s'-]+$/;
  if (!soloLetras.test(nombre)) {
    alert("El nombre solo puede contener letras (sin números ni símbolos extraños).");
    return;
  }

  const nombreNormalizado = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();

  if (amigos.includes(nombreNormalizado)) {
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
  listaAmigos.innerHTML = "";

  if (amigos.length === 0) {
    console.log("No hay nombres de amigos en la lista");
    return;
  }

  amigos.forEach((amigo, index) => {
    const li = document.createElement("li");

    const btnEditar = document.createElement("button");
    btnEditar.textContent = "✏️";
    btnEditar.title = "Editar";
    btnEditar.style.marginRight = "4px";
    btnEditar.style.background = "none";
    btnEditar.style.border = "none";
    btnEditar.style.cursor = "pointer";
    btnEditar.style.padding = "2px 4px";
    btnEditar.onclick = function () {
      editarAmigo(index);
    };

    const nombreCapitalizado = amigo.charAt(0).toUpperCase() + amigo.slice(1).toLowerCase();

    li.appendChild(btnEditar);
    li.appendChild(document.createTextNode(`${nombreCapitalizado}`));
    listaAmigos.appendChild(li);
  });
}

// Función para editar un amigo
function editarAmigo(index) {
  const nuevoNombre = prompt("Edita el nombre del amigo:", amigos[index]);
  if (nuevoNombre && nuevoNombre.trim() !== "") {
    const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s'-]+$/;
    if (!soloLetras.test(nuevoNombre)) {
      alert("El nombre solo puede contener letras (sin números ni símbolos extraños).");
      return;
    }

    const nombreNormalizado = nuevoNombre.charAt(0).toUpperCase() + nuevoNombre.slice(1).toLowerCase();

    if (amigos.includes(nombreNormalizado)) {
      alert("Ese amigo ya está en la lista.");
      return;
    }

    amigos[index] = nombreNormalizado;
    mostrarAmigos();
  }
}

// sorteo el amigo secreto y lo muestro en un alert y si no hay amigos otro alert con un mensaje.
function sortearAmigo() {
  if (amigos.length < 3) {
    alert("Debe haber al menos 3 amigos para realizar el sorteo.");
    return;
  }

  // Mezclar los amigos sin modificar el original
  const amigosMezclados = [...amigos].sort(() => Math.random() - 0.5);

  // Tomar los tres primeros
  const [primero, segundo, tercero] = amigosMezclados;

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  const crearItem = (emoji, texto, nombre) => {
    const li = document.createElement("li");
    li.style.display = "flex";
    li.style.alignItems = "center";
    li.style.gap = "8px";

    const icono = document.createElement("span");
    icono.textContent = emoji;
    icono.style.fontSize = "1.2em";

    const contenido = document.createElement("span");
    contenido.textContent = `${texto}: ${nombre}`;

    li.appendChild(icono);
    li.appendChild(contenido);

    return li;
  };

  resultado.appendChild(crearItem("🥇", "Primer lugar", primero));
  resultado.appendChild(crearItem("🥈", "Segundo lugar", segundo));
  resultado.appendChild(crearItem("🥉", "Tercer lugar", tercero));

  document.querySelector(".button-draw").disabled = true;
}


function reiniciarJuego() {
  amigos = [];
  document.getElementById("listaAmigos").innerHTML = "";
  document.getElementById("resultado").innerHTML = "";
  document.querySelector(".button-draw").disabled = false;
  document.querySelector('#amigo').value = '';
  alert("¡El juego ha sido reiniciado!");
}
