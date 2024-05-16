const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
// console.log(todoInput);
const todoList = document.querySelector(".todo-list")

todoForm.addEventListener("submit", (e) => {
    // console.log("form submitted");
    e.preventDefault(); 
    const newTodo = todoInput.value;
    const newLi = document.createElement("li");
    const newLiInnerHtml = `
        <span class="text">${newTodo}</span>
            <div class="todo-buttons">
                <button class="todo-btn done">Done</button>
                <button class="todo-btn remove">Remove</button>
            </div>`;
    newLi.innerHTML = newLiInnerHtml;
    todoList.append(newLi);
    todoInput.value = "";
});

todoList.addEventListener("click", (e) => {
    // console.log(e.target);
    //check if user clicked on done button
    if(e.target.classList.contains("done")){
        const spanLi = e.target.parentNode.previousElementSibling;
        // console.log(spanLi);
        spanLi.style.textDecoration = "line-through";
    }
    if(e.target.classList.contains("remove")){
        const targetedLi = e.target.parentNode.parentNode;
        // console.log(targetedLi);
        targetedLi.remove();
    }
});













