let amigos = [];

function agregarAmigo() {
  let nombre = document.getElementById("amigo").value;
  if (!nombre) {
    alert("Por favor, inserte un nombre.");
    return;
  }

  nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
  amigos.push(nombre);
  document.getElementById("amigo").value = "";
  mostrarAmigos();
}

function mostrarAmigos() {
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";
  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = amigos[i];
    li.classList.add("amigo-item");
    listaAmigos.appendChild(li);
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay amigos para sortear.");
    return;
  }

  let amigoSorteado = document.getElementById("resultado");
  let index = Math.floor(Math.random() * amigos.length);
  amigoSorteado.innerHTML = amigos[index];
}
