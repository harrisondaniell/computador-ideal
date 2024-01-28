import { processadores } from "./data/data.js";

document.addEventListener("DOMContentLoaded", function () {
    const tbody = document.getElementById("processadorBody");
    const search = document.querySelector('.input-group input');
    const table_headings = document.querySelectorAll('thead th');

    // Itera sobre os dados e os adiciona à tabela
    processadores.forEach((processador) => {
        const row = document.createElement("tr");
        row.dataset.link = processador.link;
        row.classList.toggle('active');

        row.innerHTML = `
            <td><img src="${processador.image}" alt="">${processador.nome}</td>
            <td>${processador.frequencia}</td>
            <td>${processador.nucleos}</td>
            <td><strong>$${processador.preco.toFixed(2)}</strong></td>
            <td>
                <p class="status shipped">Adicionar</p>
            </td>
        `;
        tbody.appendChild(row);
    });

    // Adicione logs para verificar se os elementos foram pegos corretamente
    console.log("Linhas da tabela:", document.querySelectorAll('tbody tr'));

    // 1. Searching for specific data of HTML table
    search.addEventListener('input', searchTable);

    function searchTable() {
        const table_rows = document.querySelectorAll('tbody tr');

        table_rows.forEach((row, i) => {
            let table_data = row.textContent.toLowerCase(),
                search_data = search.value.toLowerCase();

            row.classList.toggle('hide', table_data.indexOf(search_data) < 0);
            row.style.setProperty('--delay', i / 25 + 's');
        });

        document.querySelectorAll('tbody tr:not(.hide)').forEach((visible_row, i) => {
            visible_row.style.backgroundColor = (i % 2 == 0) ? 'transparent' : '#0000000b';
        });
    }
});



// processadores/script.js
document.addEventListener("DOMContentLoaded", function () {
    const tbody = document.getElementById("processadorBody");

    // Adiciona um evento de clique ao botão "Adicionar" para cada linha
    const adicionarBotoes = document.querySelectorAll('.status.shipped');
    adicionarBotoes.forEach((botao) => {
        botao.addEventListener('click', adicionarComponente);
    });

    function adicionarComponente(event) {
        const linha = event.target.closest('tr'); // Obtém a linha pai do botão clicado

        // Obtém os dados da linha (imagem, nome, preço e link)
        const imagem = linha.querySelector('img').src;
        const nome = linha.querySelector('td:nth-child(1)').textContent.trim();
        const preco = parseFloat(linha.querySelector('td:nth-child(4) strong').textContent.replace('$', ''));
        const link = linha.dataset.link;; // Adicione o atributo data-link no HTML

        // Cria um objeto representando a escolha do usuário
        const escolha = {
            tipo: 'processador',
            nome: nome,
            imagem: imagem,
            preco: preco,
            link: link
        };

        // Recupera escolhas anteriores do Local Storage
        const escolhasAnteriores = JSON.parse(localStorage.getItem('escolhas')) || [];

        // Adiciona a nova escolha ao array de escolhas
        escolhasAnteriores.push(escolha);

        // Salva o array atualizado no Local Storage
        localStorage.setItem('escolhas', JSON.stringify(escolhasAnteriores));

        // Adiciona uma classe à linha para indicar que foi escolhida
        linha.classList.add('escolhida');

        // Desabilita o botão de adicionar para esta linha
        event.target.disabled = true;

        // Redireciona para a página de montagem
        window.location.href = '../montagem/index.html';
    }

});

