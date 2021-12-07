const lista = [
  { id: 1, cliente: 'João Celso de Souza', idade: 33 },
  { id: 2, cliente: 'Claudia Cipriano', idade: 28 },
  { id: 3, cliente: 'Edilene Souza Silva', idade: 41 },
  { id: 4, cliente: 'Maurício Gomes', idade: 17 },
  { id: 5, cliente: 'Claudia Cipriano', idade: 22 },
];

let newList = [];

lista.map((list) => {
  newList.push({
    id: list.id,
    cliente: list.cliente,
    idade: list.idade,
    ativo: true,
  });

  return newList;
});

let maioresQue25 = [];

console.log(newList);

newList.filter((el) => {
  if (el.idade > 24) {
    maioresQue25.push(el);
    return maioresQue25;
  }
});

console.log(maioresQue25);
