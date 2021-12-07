// functions

function somar(a, b) {
  let num1 = Number(a);
  let num2 = Number(b);
  let result = num1 + num2;
  return result;
}

function diminuir(a, b) {
  let num1 = Number(a);
  let num2 = Number(b);
  let result = num1 - num2;
  return result;
}

function dividir(a, b) {
  let num1 = Number(a);
  let num2 = Number(b);
  let result = num1 / num2;
  return result;
}

function multiplicar(a, b) {
  let num1 = Number(a);
  let num2 = Number(b);
  let result = num1 * num2;
  return result;
}

//
const showResults = document.querySelector('.showResults');
const btnSomar = document.querySelector('#btn-somar');

btnSomar.addEventListener('click', (event) => {
  event.preventDefault();
  const firstInput = document.querySelector('#number1').value;
  const secondInput = document.querySelector('#number2').value;

  let total = somar(firstInput, secondInput);

  showResults.innerHTML = `O resultado é ${total}`;
  showResults.style = `display: flex`;

  console.log(total);
});

const btnDiminuir = document.querySelector('#btn-diminuir');

btnDiminuir.addEventListener('click', (event) => {
  event.preventDefault();
  const firstInput = document.querySelector('#number1').value;
  const secondInput = document.querySelector('#number2').value;

  let total = diminuir(firstInput, secondInput);

  showResults.innerHTML = `O resultado é ${total}`;
  showResults.style = `display: flex`;

  console.log(total);
});

const btnDividir = document.querySelector('#btn-dividir');

btnDividir.addEventListener('click', (event) => {
  event.preventDefault();
  const firstInput = document.querySelector('#number1').value;
  const secondInput = document.querySelector('#number2').value;

  let total = dividir(firstInput, secondInput);

  showResults.innerHTML = `O resultado é ${total}`;
  showResults.style = `display: flex`;

  console.log(total);
});

const btnMultiplicar = document.querySelector('#btn-multiplicar');

btnMultiplicar.addEventListener('click', (event) => {
  event.preventDefault();
  const firstInput = document.querySelector('#number1').value;
  const secondInput = document.querySelector('#number2').value;

  let total = multiplicar(firstInput, secondInput);

  showResults.innerHTML = `O resultado é ${total}`;
  showResults.style = `display: flex`;

  console.log(total);
});
