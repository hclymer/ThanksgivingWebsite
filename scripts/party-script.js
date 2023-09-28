const listContainer = document.getElementById('list-container');
const inputs = document.querySelectorAll('input');
const fName = document.getElementById('fname');
const lName = document.getElementById('lname');
const email = document.getElementById('email');

console.log(fName.value);

function addGuest() {
  let li = document.createElement('li');
  li.innerHTML = fName.value + ' ' + lName.value + ' Email:' + email.value;
  listContainer.appendChild(li);
  // let span = document.createElement('span');
  // span.innerHTML = '\u00d7';
  // li.appendChild(span);

  fName.value = '';
  lName.value = '';
  email.value = '';
  saveData();
}

listContainer.addEventListener(
  'click',
  function (e) {
    if (e.target.tagName === 'LI') {
      e.target.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem('data', listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem('data');
}
showTask();
