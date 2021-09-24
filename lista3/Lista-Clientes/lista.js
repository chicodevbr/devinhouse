let clientesLista = [
  {
    nome: 'José',
    saldo: 5000,
  },
  {
    nome: 'Maria',
    saldo: 7500,
  },
  {
    nome: 'Sebastião',
    saldo: 10000,
  },
  {
    nome: 'Pedro',
    saldo: 12500,
  },
  {
    nome: 'Tiago',
    saldo: 2500,
  },
  {
    nome: 'Tatiana',
    saldo: 13788,
  },
  {
    nome: 'Kleiton',
    saldo: 4500,
  },
  {
    nome: 'Patricia',
    saldo: 4742,
  },
  {
    nome: 'Trevor',
    saldo: 5500,
  },
  {
    nome: 'Michele',
    saldo: 8900,
  },
];

const listarClientes = document.querySelector('.clientes');
const listaVip = document.querySelector('.investimentos');

clientesLista.map((cliente) => {
  listarClientes.innerHTML += `<p>${cliente.nome}</p>`;
});

let potencial = 5500;
let clientesVip = [];

clientesLista.sort(compare).filter((cliente) => {
  if (cliente.saldo > potencial) {
    clientesVip.push(cliente.nome, cliente.saldo);
    listaVip.innerHTML += `<p>Cliente: ${cliente.nome} <p>Saldo: ${cliente.saldo}</p></p>`;
  }
});

clientesVip.forEach((cliente) => {
  let count = clientesVip.length;
  if (cliente > count - 1) {
    console.log('fim da lista');
  }
});

function compare(a, b) {
  return b.saldo - a.saldo;
}
