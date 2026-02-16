const todoText = document.querySelector("#input_text");
const todoAmount = document.querySelector("#input_number");
const todoBtn = document.querySelector("#submit_task");
const todoArr = [];
const unliked = document.querySelector(".unliked");
const liked = document.querySelector(".liked");
const task_container = document.querySelector(".task_container");
const done_container = document.querySelector(".done_container");

todoBtn.addEventListener("click", submitTodo)

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
    //local storage
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
        console.log("done =", `${elm.done}`)

        todoAmount.value = null;
        todoText.value = null;

        li.addEventListener("click",(evt)=> {
            if (evt.target.classList.contains("likingIt")){
                 console.log("KLIK",evt.target);
                 elm.liked = !elm.liked;
                    console.log("todoArr", todoArr);
                     filterAndSort();
            }
             if (evt.target.classList.contains("taskDone")){
                console.log("task done clicked", `${elm.id}`);
                elm.done = true;
                //flyttes her hen til done fanen
                //Skal hive fat i id: 
                console.log("done i if =", `${elm.done}`)
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