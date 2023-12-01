export default class Pessoa {
    #nome
    #dataNasc
    #funcao

    constructor(nome, dataNasc, funcao) {
        this.#nome = nome;
        this.#dataNasc = new Date(dataNasc);
        this.#funcao = funcao;
    }

    get nome() { return this.#nome }
    set nome(novoNome) { this.#nome = novoNome; }
    get dataNasc() { return this.#dataNasc }
    set dataNasc(novaDataNasc) { this.#dataNasc = new Date(novaDataNasc); }
    get funcao() { return this.#funcao }
    set funcao(novaFuncao) { this.#funcao = novaFuncao; }

    calculaIdade() {
        const hoje = new Date();
        const anoNascimento = this.#dataNasc.getFullYear();
        const anoAtual = hoje.getFullYear();
        let idade = anoAtual - anoNascimento;
        const mesNascimento = this.#dataNasc.getMonth();
        const diaNascimento = this.#dataNasc.getDate();

        if (mesNascimento > hoje.getMonth() || (mesNascimento === hoje.getMonth() && diaNascimento > hoje.getDate())) {
            idade--;
        }

        return idade;
    }
};