function get_todos(){
var todos = new Array;
var todos_str = localStorage.getItem('todo');
if(todos_str !==null){
  todos = JSON.parse(todo_str);

}
return todos;
}
function add(){
  var task = document.getElementById('task').ariaValueMax;
  todos.push(task)
  localStorage.setItem('todo',JSON.stringify(todos));
 Show();
 return false;
}
