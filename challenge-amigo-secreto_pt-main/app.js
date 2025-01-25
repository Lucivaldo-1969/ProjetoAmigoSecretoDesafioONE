//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

// Função para adicionar amigo à lista
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome) {
        amigos.push(nome);
        atualizarLista();
        input.value = ''; // Limpa o campo de entrada
    } else {
        alert('Por favor, digite um nome.');
    }
}

// Função para atualizar a lista de amigos exibida
function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpa a lista atual

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Função para sortear amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos 2 amigos para sortear.');
        return;
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpa resultados anteriores

    const sorteados = [...amigos]; // Copia a lista de amigos
    const pares = {};

    // Sorteia amigos
    sorteados.forEach(amigo => {
        let indiceSorteado;
        do {
            indiceSorteado = Math.floor(Math.random() * sorteados.length);
        } while (sorteados[indiceSorteado] === amigo); // Garante que não sorteie a si mesmo

        pares[amigo] = sorteados[indiceSorteado];
        sorteados.splice(indiceSorteado, 1); // Remove o amigo sorteado da lista
    });

    // Exibe os resultados
    for (const [amigo, sorteado] of Object.entries(pares)) {
        const li = document.createElement('li');
        li.textContent = `${amigo} sorteou ${sorteado}`;
        resultado.appendChild(li);
    }
}
