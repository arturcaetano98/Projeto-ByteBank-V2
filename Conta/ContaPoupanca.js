// Ao estender uma classe, é necessario importar a classe mãe para o reconhecimento ocorrer.
import { Conta } from "./Conta.js";

// O "export" é usado para que a classe seja encontrada por outras classes (Com o projeto em NodeJS devidamente configurado).
// Utiliza a herança da classe "Conta".
export class ContaPoupanca extends Conta{

	constructor(saldoInicial, cliente, agencia){

        // Super é utilizado para chamaro o construtor da classe mãe
        super(saldoInicial, cliente, agencia);
	}
	
	// Ao adicionar um metodo com o mesmo nome da classe mãe, ele sobreescreve o metodo antigo por esse novo abaixo.
    sacar(valor){
        const taxa = 1.02;
        // Referencia o metodo privado da classe mãe (Ou "this._sacar()")
        return super._sacar(valor, taxa);
    }
}