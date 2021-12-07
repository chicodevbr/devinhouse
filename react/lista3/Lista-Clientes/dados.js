class Endereco {
  constructor(cliente, logradouro, numero, bairro, cidade, estado, pais, cep) {
    this.cliente = cliente;
    this.logradouro = logradouro;
    this.numero = numero;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
    this.pais = pais;
    this.cep = cep;
  }

  get printEnd() {
    return this.printEnd();
  }
  printEnd() {
    return `Cliente: ${this.cliente} \n Logradouro: ${this.logradouro} \n Numero: ${this.numero} \n Bairro: ${this.bairro} \n Cidade: ${this.cidade} \n Estado: ${this.estado} \n País: ${this.pais} CEP: ${this.cep}`;
  }
}

let clienteUm = new Endereco(
  'Romeo',
  'Rua do Lavrador',
  32,
  'Copacabana',
  'Rio de Janeiro',
  'Rio de Janeiro',
  'Brasil',
  '71.340.058'
);

console.log(clienteUm.printEnd());
