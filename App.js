import Funcionario from "./Funcionario.js";

function inserirDados() {

    const nome = document.querySelector('input[type="text"]').value;
    const dataNasc = document.querySelector('input[type="date"]').value;
    const funcao = document.querySelector('.fun').value;


    if (nome && dataNasc && funcao !== 'Selecione a Função') {

        const funcionario = new Funcionario(nome, dataNasc, funcao);


        adicionarLinhaTabela(funcionario);

        limparCampos();
    } else {

        alert('Preencha todos os campos corretamente.');
    }
}

function adicionarLinhaTabela(funcionario) {

    const tabela = document.getElementById('tabela');


    let tabelaBody = tabela.getElementsByTagName('tbody')[0];

    if (!tabelaBody) {
        tabelaBody = document.createElement('tbody');
        tabela.appendChild(tabelaBody);
    }


    const novaLinha = tabelaBody.insertRow();


    const celulaNome = novaLinha.insertCell(0);
    const celulaDataNasc = novaLinha.insertCell(1);
    const celulaFuncao = novaLinha.insertCell(2);
    const celulaIdade = novaLinha.insertCell(3);


    celulaNome.textContent = funcionario.nome;
    celulaDataNasc.textContent = funcionario.dataNasc.toLocaleDateString();
    celulaFuncao.textContent = funcionario.funcao;
    celulaIdade.textContent = funcionario.calculaIdade();
}


function limparCampos() {
    document.querySelector('input[type="text"]').value = '';
    document.querySelector('input[type="date"]').value = '';
    document.querySelector('.fun').value = 'Selecione a Função';
}

document.querySelector('button').addEventListener('click', inserirDados);
