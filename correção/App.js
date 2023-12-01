import Funcionario from "./Funcionario.js";

const funcionarios = [];

const form = document.getElementById('novaPessoa');

const corpoTabela = document.getElementById('corpoTabela');

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    let func = new Funcionario(form.nome.value, new Date(`${form.nascimento.value}T00:00`),form.funcao.value);
    funcionarios.push(func);
    form.reset();
    atualizaTabela();
});

function atualizaTabela(){
    corpoTabela.innerHTML = "";
    funcionarios.forEach((func)=>{
        corpoTabela.innerHTML += func.toTable();
    });
};