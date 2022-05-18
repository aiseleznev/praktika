let button = document.querySelector('.add-todo');
let todos = document.querySelector('.todo-wrapper');
let input = document.querySelector('.input');

const createElement = (text) => {
    let item = document.createElement('div');
    let x = document.createElement('div');
    x.classList.add('delete');
    let y = document.createElement('span');
    y.classList.add('text');
    x.innerHTML = '&#215;';
    y.innerText = text;

    item.classList.add('item-wrapper');
    item.appendChild(x);
    item.appendChild(y);
    todos.appendChild(item);
    input.value = '';
}

const addItem = () => {
    if (!input.value) return;
    let value = input.value;
    createElement(value);
}

const deleteItem = (e) => {
    const target = e.target;
    if (!target.classList.contains('delete')) return;
    target.parentNode.remove();
}

button.addEventListener('click', addItem);
todos.addEventListener('click', deleteItem);