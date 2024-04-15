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

function editTodo(index) {
  let newText = prompt("Edit todo:", todoList[index]);
  if (newText !== null) {
    todoList[index] = newText.trim();
    renderTodos();
  }
}

function renderTodos() {
  let list = document.getElementById("todoList");
  list.innerHTML = "";
  
  todoList.forEach((todo, index) => {
    let li = document.createElement("li");
    li.textContent = todo;
    
    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.onclick = function() {
      editTodo(index);
    };
    
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
      deleteTodo(index);
    };
    
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    list.appendChild(li);
  });
}
