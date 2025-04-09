const refs = {
    todoList: document.querySelector("#todo-list"),
    todoForm: document.querySelector("#todo-form"),
    todoInput: document.querySelector(".todo-input"),
}
refs.todoForm.addEventListener("submit", formHandler);
function formHandler(e) {
    e.preventDefault();
    const taskText = refs.todoInput.value;
    // const markup = `<li>${taskText}</li>`;
    const li = document.createElement("li");
    li.innerText = taskText;
    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("aria-label", "Delete task");
    deleteBtn.innerText="Delete";
    deleteBtn.style['margin-left'] = "15px";
    deleteBtn.addEventListener("click", deleteTask);

    li.append(deleteBtn);

    refs.todoList.append(li);
    refs.todoInput.value = "";
    refs.todoInput.focus();
}
function deleteTask(e) {
    e.target.closest("li").remove();
}