function callbackSucesso(valor) {
  console.log('Sucesso:', valor);
}

function callbackRejeicao(valor) {
  console.log('Erro:', valor);
}

let promise = new Promise((resolve, reject) => {
  resolve(callbackSucesso('Olá, mundo!'));

  reject(callbackRejeicao('Ops, caí no onRejected!'));
});
