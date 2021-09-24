const itemsArray = JSON.parse(localStorage.getItem('items')) || [];

function showItemsSave(clearItems = false) {
  const selectedContent = document.querySelector('.selected');
  if (clearItems) {
    selectedContent.innerHTML = '';
  }

  if (itemsArray.length > 0) {
    itemsArray.forEach((item) => {
      selectedContent.innerHTML += `<div class="card"><p>${item.itemTitle}</p>
      <p>${item.itemAmount}</p></div>`;
    });
  } else {
    selectedContent.innerHTML = 'Lista vazia';
  }
}

const itemForm = document.querySelector('#form');

itemForm.addEventListener('submit', (event) => {
  event.preventDefault();
  let items = {};
  items.itemTitle = document.querySelector('#new-item').value;
  items.itemAmount = document.querySelector('#new-item-amount').value;

  const alertMessage = document.querySelector('.alert');

  if (items.itemTitle === '') {
    alertMessage.innerHTML =
      'Por favor, informe um item que gostaria de adicionar';
    alertMessage.style = 'display: block; color: red';
  } else {
    itemsArray.push(items);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    showItemsSave(true);
    alertMessage.innerHTML = 'Item adicionado com sucesso';
    alertMessage.style = 'display: block; color: green';
    setTimeout(() => {
      alertMessage.innerHTML = '';
      alertMessage.style = 'display: none';
      itemForm.reset();
      itemForm.style = 'display: none';
    }, 2000);
  }
});

function showAddItemModal() {
  itemForm.style = 'display: flex';
}

window.onload = function () {
  showItemsSave();
};
