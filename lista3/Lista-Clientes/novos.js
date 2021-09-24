class Cliente {
  constructor(nome, cpf, endereco, celular) {
    this.nome = nome;
    this.cpf = cpf;
    this.endereco = endereco;
    this.celular = celular;
  }
  get mostrarCliente() {
    return this.mostrarCliente;
  }
  mostrarCliente() {
    return `Nome: ${this.nome} \n CPF: ${this.cpf} \n Endereço: ${this.endereco} \n Celular: ${this.celular}
      `;
  }
}

let novoCliente = new Cliente(
  'Lady Bird',
  '777.777.777-77',
  'Rua do Ouvidor, Centro, 37 Rio de Janeiro, Rio de Janeiro, Brasil',
  '9999-9999'
);

console.log(novoCliente.mostrarCliente());
