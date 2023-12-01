export default class Pessoa{
    constructor(nome,nascimento, funcao){
        if(new.target === Pessoa){
            throw new Error('Não é possivel instanciar uma classe abstrata');
        }
        this.nome = nome;
        this.nascimento = nascimento;
        this.funcao = funcao;
        this.idade = this.calcIdade();

    }

    calcIdade(){
        if(this.nascimento === undefined) return 0;
        let hoje = new Date();
        let difAno = hoje.getFullYear() - this.nascimento.getFullYear();
        let difMes = hoje.getMonth() - this.nascimento.getMonth();
        let difDia = hoje.getDate() - this.nascimento.getDate();

        if(difMes < 0 || (difMes === 0 && difDia < 0)){
            difAno--;
        }
        return difAno;
    }

    toTable(){
        return `<tr>
            <td>${this.nome}</td>
            <td>${this.nascimento.toLocaleDateString()}</td>
            <td>${this.funcao}</td>
            <td>${this.idade}</td>
        </tr>`
    }
};