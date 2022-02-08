// Classe com polimorfismo. Autentica qualquer coisa quer tiver senhas previmente cadastrada sem exibir os atributos fora da propria classe.

export class SistemaDeAutenticacao{
	// Autenticavel pode ser qualquer coisa quer possua senha. Cliente ou Funcionario
	// Para fazer funcionar, basta adicionar dentro da classe o metodo "autenticar()" comparando a senha passada por parametro.
	static login(autenticavel, senha){
		// Se o objeto autenticavel não possuir o metodo "autenticar" o return é falso.
		if(this.ehAutenticavel(autenticavel)){
			return autenticavel.autenticar(senha);
		}
		return false;
	}

	// Metodo estatico são aqueles que não possuem instaciação.
	static ehAutenticavel(autenticavel){		
		// Busca o metodo "autenticar" no objeto "autenticavel" e busca saber se ele é uma função.
	 	return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function;
    }

    /* 

    Isso é DuckType. Ter certeza do tipo de dado manipulado. 

    É necessario ter certeza que o que esta sendo passado é um objeto do tipo "cliente" ou "funcionario"
    e se ambos possuem o metodo "autenticar" dentro de suas respectivas classes.

    */
}