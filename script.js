const todoText = document.querySelector("#input_text");
const todoAmount = document.querySelector("#input_number");
const addBtn = document.querySelector("#submit_task");
const todoArr = [];
const unliked = document.querySelector(".unliked");
const liked = document.querySelector(".liked");
const task_container = document.querySelector(".task_container");
const done_container = document.querySelector(".done_container");
const todoBtn = document.querySelector("#to_do");
const doneBtn = document.querySelector("#done");
const doneSection = document.querySelector(".done_section");
const todoSection = document.querySelector(".todo_section");

doneBtn.addEventListener("click", showDone);
todoBtn.addEventListener("click", showTodo);

window.addEventListener("DOMContentLoaded", () => {
    const storedTodos = localStorage.getItem("todos");

    if (storedTodos) {
        const parsedTodos = JSON.parse(storedTodos); //lavet det om til objekt/arry igen
        todoArr.push(...parsedTodos); //... er så den ikke laver et array inde i array
        filterAndSort ();
    }
});


function showDone() {
    todoSection.style.zIndex ="0";
    doneSection.style.zIndex = "1";
    todoBtn.style.backgroundColor = "#FFF4DE";
    doneBtn.style.backgroundColor = "#FFFBF3";
    todoBtn.classList.remove("active_tab");
    doneBtn.classList.add("active_tab");
}

function showTodo() {
    todoSection.style.zIndex = "1";
    doneSection.style.zIndex ="0";
    doneBtn.style.backgroundColor = "#FFF4DE";
    todoBtn.style.backgroundColor = "#FFFBF3";
    doneBtn.classList.remove("active_tab");
    todoBtn.classList.add("active_tab");
}

addBtn.addEventListener("click", submitTodo);

function submitTodo () {
    const todoObject = {text:todoText.value, amount:todoAmount.value, done:false, liked:false, id:self.crypto.randomUUID ()}
    todoArr.push(todoObject);
    filterAndSort();
}

function filterAndSort () {
    const activeTask = todoArr.filter(elm => !elm.done);
    const doneTask = todoArr.filter(elm => elm.done);

    showTaskArr(activeTask);
    showDoneArr(doneTask);
    
    localStorage.setItem("todos", JSON.stringify(todoArr));
}

function showTaskArr(arr) {
    task_container.innerHTML="";
    arr.forEach (elm => {

        const li = document.createElement("li");
        li.innerHTML=`<p>${elm.text}</p>
        <div class="flex_row">
        <p class="margin_right">${elm.amount}</p>
        <img class="icon margin_right taskDone" src="check-mark.png" alt="" />
        <img class="icon likingIt" src=${elm.liked?"love.png":"love-empty.png"} alt="" /></div>`

        task_container.appendChild(li);

        todoAmount.value = null;
        todoText.value = null;

        li.addEventListener("click",(evt)=> {
            if (evt.target.classList.contains("likingIt")){
                 elm.liked = !elm.liked;
                     filterAndSort();
            }
             if (evt.target.classList.contains("taskDone")){
                elm.done = true;
                filterAndSort ();
            }
           }); 

    })
}

 function showDoneArr (arr) {
done_container.innerHTML="";

arr.forEach (elm => {
    const li = document.createElement("li");

    li.innerHTML= `<p>${elm.text}</p>
        <div class="flex_row">
        <p class="margin_right">${elm.amount}</p>
        <img class="icon margin_right delete" src="delete.png"} alt="" />
        <img class="icon undoTask" src="file.png" alt="" /></div>`

    done_container.appendChild(li);

    li.addEventListener("click", (evt)=> {
        if (evt.target.classList.contains("undoTask")){
            elm.done = false;
            filterAndSort ();
        }

        if (evt.target.classList.contains("delete")) {
            const index = todoArr.findIndex(targetArr => targetArr.id === elm.id);
            todoArr.splice(index, 1);
            filterAndSort ();

        }
    }) 
});
}