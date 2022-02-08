// Por não ser permitida a instanciação direta da classe ela é considerada uma "Classe Abstrata".

// Significa que ela é uma classe que só pode ser usada por outras classes filhas. 
// Visto que seu comportamento é apenas um modelo (SUPERCLASSE GENERICA).

export class Conta{
	constructor(saldoInicial, cliente, agencia){

		// Mensagem de proteção contra a instanciação da classe Conta diretamente.
		// As operações de conta deverão ser acessada atraves das classes especificas (ContaCorrete, ContaPoupanca e etc...)
		if(this.constructor == Conta){
			// Força um erro caso Conta seja instanciado.
			throw new Error("Você não deveria estar instanciando a classe Conta");
		}

		this._saldoIncial = saldoInicial;
		this._cliente = cliente;
		this._agencia = agencia;
	}

	set cliente(novoValor){
		if(novoValor instanceof Cliente){
			this._nome = novoValor;
		}
	}

	get cliente(){
		return this._cliente;
	}

	get saldo(){
		return this._saldo;
	}

	// Metodo abstrato = Não foi feito para ser chamado diretamente. É sobreescrito pelos metodos das classes filhas.
	sacar(valor){
		throw new Error("O metodo sacar da classe Conta é abstrato.");
    }

    _sacar(valor, taxa){
    	const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo = this._saldo - valorSacado;
            return valorSacado;
        }
        return 0;
    }

    depositar(valor){
        if(valor <= 100)
        {
            return;
        }
        this._saldo = this._saldo + valor;           
    }

    tranferir(valor, conta){
    	if(this._tipo == "salario"){
    		return;
    	}
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}