import  Pessoa  from "./Pessoa.js";

export default class Funcionario extends Pessoa{

    constructor(nome, dataNasc, funcao) {
        super(nome, dataNasc, funcao);
    }

    calculaIdade() {
        const hoje = new Date();
        const anoNascimento = this.dataNasc.getFullYear();
        const anoAtual = hoje.getFullYear();
        let idade = anoAtual - anoNascimento;
        const mesNascimento = this.dataNasc.getMonth();
        const diaNascimento = this.dataNasc.getDate();

        if (mesNascimento > hoje.getMonth() || (mesNascimento === hoje.getMonth() && diaNascimento > hoje.getDate())) {
            idade--;
        }

        return idade;
    }
};