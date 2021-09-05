const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-form input');
const todoList = document.querySelector('#todo-list');

const TODOS_KEY = "todos";

let toDos = [];

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deletTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
  saveTodos();
}

function paintTodo(a) {
  const li = document.createElement("li");
  li.id = a.id;
  const span = document.createElement("span");
  span.innerText = a.text;
  const btn = document.createElement("button");
  btn.innerText = "X";

  btn.addEventListener('click', deletTodo);

  li.appendChild(span);
  li.appendChild(btn);
  todoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  }
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
}
todoForm.addEventListener('submit', handleToDoSubmit);

const savedToDOs = localStorage.getItem(TODOS_KEY);
if (savedToDOs !== null) {
  const parsedToDos = JSON.parse(savedToDOs);
  toDos = parsedToDos;
  parsedToDos.forEach(paintTodo);
}