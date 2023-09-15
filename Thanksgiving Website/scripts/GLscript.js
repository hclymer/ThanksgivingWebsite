const groeries = document.getElementsByClassName('groceries');
const pencil = document.getElementById('pencil');
const allItems = document.getElementById('allItems');
const userInput = document.getElementById('userInput');

pencil.addEventListener('click', (e) => {
  allItems.innerHTML = ' ';
});

userInput.addEventListener('keydown', (e) => {
  if (e.key == 'Enter') addItem();
});

function addItem() {
  var h2 = document.createElement('h2');
  h2.innerHTML = '- ' + userInput.value;

    h2.addEventListener('click', () => {
        h2.style.textDecoration = 'line-through'
    })

    allItems.insertAdjacentElement('beforeend', h2);

    
    userInput.value = "";
}


