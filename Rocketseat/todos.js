var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos(){
  listElement.innerHTML = '';

  for(todo of todos){
    var todoElement = document.createElement('li');
    var todoText = document.createTextNode(todo);

    var linkELement = document.createElement('a');

    linkELement.setAttribute('href', '#');

    var pos = todos.indexOf(todo);
    linkELement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

    var linkText = document.createTextNode('Excluir');

    linkELement.appendChild(linkText);

    todoElement.appendChild(todoText);
    todoElement.appendChild(linkELement);

    listElement.appendChild(todoElement);
  }
}

renderTodos();

function addTodo(){
  var todoText = inputElement.value;

  todos.push(todoText);
  inputElement.value = "";
  renderTodos();
  saveToStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos){
  todos.splice(pos, 1);
  renderTodos();
  saveToStorage();
}

function saveToStorage(){
  localStorage.setItem('list_todos', JSON.stringify(todos));
}