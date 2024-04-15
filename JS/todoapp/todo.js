let todoList = [];

function addTodo() {
  let input = document.getElementById("todoInput");
  let todoText = input.value.trim();
  
  if (todoText !== "") {
    todoList.push(todoText);
    input.value = "";
    renderTodos();
  }
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  renderTodos();
}

function renderTodos() {
  let list = document.getElementById("todoList");
  list.innerHTML = "";
  
  todoList.forEach((todo, index) => {
    let li = document.createElement("li");
    li.textContent = todo;
    
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
      deleteTodo(index);
    };
    
    li.appendChild(deleteButton);
    list.appendChild(li);
  });
}
