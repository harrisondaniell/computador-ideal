// montagem/script.js
document.addEventListener("DOMContentLoaded", function () {
    const tbody = document.querySelector(".table__body tbody");

    // Recupera as escolhas salvas no Local Storage
    const escolhasAnteriores = JSON.parse(localStorage.getItem("escolhas")) || [];

    // Verifica se há pelo menos três elementos no tbody antes de substituir
    if (tbody.children.length >= 3) {
        // Cria um novo elemento para substituir o terceiro
        const novaEscolha = escolhasAnteriores.slice(0, 1)[0];
        const novoElemento = criarElementoLinha(novaEscolha);

        // Substitui o terceiro elemento pelo novo
        tbody.replaceChild(novoElemento, tbody.children[0]);
    }

    // Adicione logs para verificar se os elementos foram pegos corretamente
    // console.log("Linhas da tabela:", document.querySelectorAll('.table__body tbody tr'));
});

// Função para criar um elemento de linha com base em uma escolha
function criarElementoLinha(escolha) {
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${escolha.tipo}</td>
    <td><img src="${escolha.imagem}" alt="${escolha.nome}">${escolha.nome}</td>
    <td>${escolha.preco.toFixed(2)}</td>
    <td>x</td>
    <td></td>
    <td>
    <a href="${escolha.link}" target="_blank" rel="noopener noreferrer">
    <p class="status1">Comprar</p>
    </a>
    
    </td>
`;
    return row;
}
