const form = document.getElementById('form-contato');
let contatos = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaContato();
});

function adicionaContato() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelefoneContato = document.getElementById('telefone-contato');

    // Verifica se o contato já está cadastrado pelo nome ou telefone
    const contatoExistente = contatos.find(contato => 
        contato.nome === inputNomeContato.value || contato.telefone === inputTelefoneContato.value
    );

    if (contatoExistente) {
        alert(`O contato "${inputNomeContato.value}" com o telefone "${inputTelefoneContato.value}" já foi cadastrado.`);
        return;
    }

    // Adiciona o contato à lista de contatos
    contatos.push({
        nome: inputNomeContato.value,
        telefone: inputTelefoneContato.value
    });

    // Atualiza a tabela de contatos
    atualizaTabela();

    // Limpa os campos do formulário
    inputNomeContato.value = '';
    inputTelefoneContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = '';

    contatos.forEach(contato => {
        let linha = '<tr>';
        linha += `<td>${contato.nome}</td>`;
        linha += `<td>${contato.telefone}</td>`;
        linha += '</tr>';

        corpoTabela.innerHTML += linha;
    });
}

