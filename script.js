const todoText = document.querySelector("#input_text");
const todoBtn = document.querySelector("");
const todoContainer = document.querySelector("");
const todoArr = [];

todoBtn.addEventListener("click", submitTodo)

function submitTodo () {
    const todoObject = {text:todoText.value, done:false, id:self.crypto.randomUUID ()}
    todoArr.puch(todoObject);
    console.log("todoArr", todoArr);
}

function filterAndSort () {
    showTaskArr();
}

function showTaskArr() {
    todoArr.forEach (elm => {
        
    })
}