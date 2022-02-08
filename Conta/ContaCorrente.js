// Ao estender uma classe, é necessario importar a classe mãe para o reconhecimento ocorrer.
import { Conta } from "./Conta.js";

// Utiliza a herança da classe "Conta".
export class ContaCorrente extends Conta{

    static numeroDeContas = 0;

    constructor(cliente, agencia){
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas = ContaCorrente.numeroDeContas + 1;
        }

    // Ao adicionar um metodo com o mesmo nome da classe mãe, ele sobreescreve o metodo antigo por esse novo abaixo.
    sacar(valor){
        const taxa = 1.1;
        // Referencia o metodo privado da classe mãe (Ou "this._sacar()")
        return super._sacar(valor, taxa);
    }
}
