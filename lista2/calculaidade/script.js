// buscando elementos do DOM

const form = document.querySelector("#form");

// function para ouvir evento na página e calcular a idade

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const today = new Date();
  // const today = date.toLocaleDateString();

  const inputData = form.elements["calcInput"];
  const birthInput = new Date(inputData.value);
  /* const birth = birthInput.toLocaleDateString("pt-BR", {
    timeZone: "UTC",
  });*/

  const age = calcAge(birthInput, today);

  document.querySelector(
    ".display"
  ).textContent = `Você tem exatamente ${age} anos de idade.`;
});

// function para calcular a idade

function calcAge(birth, today) {
  return Math.floor(
    Math.ceil(
      Math.abs(birth.getTime() - today.getTime()) / (1000 * 3600 * 24)
    ) / 365.25
  );
}
