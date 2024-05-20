function addTodo(event) {
  event.preventDefault()
  const input = document.getElementById('todo-input')
  const todoList = document.getElementById('todo-list')
  const newTodo = input.value.trim()

  if (newTodo) {
    const li = document.createElement('li')
    li.textContent = newTodo;

    li.addEventListener('click', () => {
        todoList.removeChild(li); // Remove the clicked li element from todoList
      });

    todoList.appendChild(li)
    input.value = ''  
  } else {
    console.log('Please enter a task!')
  }
}
