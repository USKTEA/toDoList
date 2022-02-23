const todoForm = document.querySelector(".todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".todo-list");

let todos= [];

function addTodo(event) { 
    event.preventDefault();
    const newTodo = todoInput.value; 
    todoInput.value = "";
    const newToDoObj = { 
        text : newTodo, 
        id : Date.now(),
    };
    todos.push(newToDoObj);
    paintTodo(newToDoObj);
    saveTodos();
}; 

function saveTodos() { 
    localStorage.setItem("todos",JSON.stringify(todos));
};

function paintTodo(newTodo) {
const li = document.createElement("li"); 
li.id = newTodo.id;
const span = document.createElement("span"); 
const button = document.createElement("button"); 
button.innerText = "X";

li.appendChild(span);
li.appendChild(button);
todoList.insertBefore(li,todoList.firstChild);

span.innerText = newTodo.text; 

button.addEventListener("click",deleteTodo);
span.addEventListener("dblclick",editTodo);
};

function editTodo(event){ 
    const span = event.target;
    const li = event.target.parentElement; 
    const newSpan = document.createElement("span");
    const editForm = document.createElement("form");
    const input = document.createElement("input");
    span.remove();
    input.style.backgroundColor = "#FFFFAA";
    input.setAttribute("required","");
    input.setAttribute("type","text");
    li.insertBefore(newSpan,li.firstChild);
    li.insertBefore(editForm,li.firstChild);
    editForm.appendChild(input);
    const savedTodo = todos.filter((editTodo) => editTodo.id === parseInt(li.id));
    // const savedKey = [...new Set(savedTodo.map(it => it.text))];
    input.value = savedTodo[0].text;
    editForm.addEventListener("submit",editSavedTodos);
    newSpan.addEventListener("dblclick",editTodo);

    function editSavedTodos(event) {
        event.preventDefault();
        todos = todos.filter((edit)=> edit.id !== parseInt(li.id));
        savedTodo[0].text = input.value;
        const newInput = {
            text : savedTodo[0].text,
            id : savedTodo[0].id,
        }
        input.style.display = "none";
        newSpan.innerText = newInput.text;
        editForm.remove();
        todos.push(newInput);
        saveTodos();
    }    
}

function deleteTodo(event){
    const li = event.target.parentElement;
    todos = todos.filter((todo)=> todo.id !== parseInt(li.id)); 
    li.remove();
    saveTodos();
};

todoForm.addEventListener("submit",addTodo);

const savedTodos = localStorage.getItem("todos");

if(savedTodos !==null) {
    const parsedTodos = JSON.parse(savedTodos); 
    todos = parsedTodos; 
    parsedTodos.forEach(paintTodo);
};

