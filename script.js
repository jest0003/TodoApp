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
    console.log("todoArr", todoArr);
    filterAndSort();
}

function filterAndSort () {
    showTaskArr();
    //local storage
}

function showTaskArr() {
    task_container.innerHTML="";
    todoArr.forEach (elm => {

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
                 console.log("KLIK",evt.target);
                 elm.liked = !elm.liked;
                    console.log("todoArr", todoArr);
                     filterAndSort();
            }
             if (evt.target.classList.contains("taskDone")){
                console.log("task done clicked", `${elm.id}`);
                
                //flyttes her hen til done fanen
                //Skal hive fat i id: 
                doneList ();
            }
           }); 

    })
}

 function doneList () {
done_container
}