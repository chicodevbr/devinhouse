const today = new Date();

const time = today.toLocaleTimeString('pt-BR', {
  hour: '2-digit',
  minute: '2-digit',
});

document.querySelector('.show-time').textContent = `Agora são ${time}`;
