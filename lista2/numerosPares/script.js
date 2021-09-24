const form = document.querySelector("#form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const numberInput = form.elements["number"];
  const number = numberInput.value;

  if (number % 2 === 0 && number != 0) {
    document.querySelector(
      ".display"
    ).textContent = `O numero ${number} é par.`;
  } else if (number % 2 != 0) {
    document.querySelector(
      ".display"
    ).textContent = `O numero ${number} é ímpar.`;
  } else {
    document.querySelector(".display").textContent = `Digite um número válido.`;
  }
});
