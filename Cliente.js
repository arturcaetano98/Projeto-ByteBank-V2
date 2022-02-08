export class Cliente{
    constructor(nome, cpf, senha){
        this.nome = nome;
        this._cpf = cpf;
        this._senha = senha;
    }

    // Realiza a comparação de senha cadastrada com a passada por parametro.
    autenticar(senha){
        return this._senha == senha;
    }

    get cpf(){
        return this._cpf;
    }
}