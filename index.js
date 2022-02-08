// import {Cliente} from "./Cliente.js";
// import {ContaCorrente} from "./Conta/ContaCorrente.js";
// import {ContaPoupanca} from "./Conta/ContaPoupanca.js";
// import {ContaSalario} from "./Conta/ContaSalario.js";

// const cliente1 = new Cliente("Ricardo", 11122233309);

// const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
// contaCorrenteRicardo.depositar(500);
// contaCorrenteRicardo.sacar(100);

// const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
// contaPoupanca.sacar(10);

// console.log(contaCorrenteRicardo);
// console.log(contaPoupanca);

import {Cliente} from "./Cliente.js";
import {Gerente} from "./Funcionario/Gerente.js";
import {Diretor} from "./Funcionario/Diretor.js";
import {SistemaDeAutenticacao} from "./SistemaDeAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456");

const gerente = new Gerente("Ricardo", 5000, 12345678911);
gerente.cadastrarSenha("1234");


// Polimorfismo na parte da senha. Qualquer funcionario que tenha senha já esta funcionando.
const diretorEstaLogado = SistemaDeAutenticacao.login(diretor, "123456");
const gerenteEstaLogado = SistemaDeAutenticacao.login(gerente, "1234");


console.log(diretorEstaLogado);
console.log(gerenteEstaLogado);

// Teste com o cliente. Bastou adicionar o atributo de senha e o getter.
const cliente = new Cliente("Artur", 11122233344, "999");
const clienteEstaLogado = SistemaDeAutenticacao.login(cliente, "999");
console.log(clienteEstaLogado);