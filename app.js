// Array para armazenar os nomes
let amigos = [];

// Função para adicionar amigos
function agregarAmigo() {
    const input = document.getElementById("amigo"); // Capturar o campo de entrada
    const nombre = input.value.trim(); // Capturar e limpar espaços em branco

    // Validar se o nome não está vazio
    if (nombre === "") {
        alert("Por favor, ingrese un nombre.");
        return;
    }

    // Adicionar nome ao array e exibir na lista
    amigos.push(nombre);

    const lista = document.getElementById("listaAmigos");
    const item = document.createElement("li");
    item.textContent = nombre;
    lista.appendChild(item);

    // Limpar o campo de entrada
    input.value = "";
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpar resultados anteriores

    // Validar se há pelo menos um amigo
    if (amigos.length < 1) {
        alert("Debe haber al menos un amigo para realizar el sorteo.");
        return;
    }

    // Sortear uma pessoa aleatória da lista
    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];

    // Exibir o resultado
    const item = document.createElement("li");
    item.textContent = `El amigo secreto es: ${amigoSorteado}`;
    resultado.appendChild(item);
}
