const todoText = document.querySelector("#input_text");
const todoAmount = document.querySelector("#input_number");
const todoBtn = document.querySelector("#submit_task");
//const todoContainer = document.querySelector("");
const todoArr = [];
const unliked = document.querySelector(".unliked");
const liked = document.querySelector(".liked");
const tester = document.querySelector(".tester");

todoBtn.addEventListener("click", submitTodo)

function submitTodo () {
    const todoObject = {text:todoText.value, amount:todoAmount.value, done:false, liked:false,id:self.crypto.randomUUID ()}
    todoArr.push(todoObject);
    console.log("todoArr", todoArr);
    filterAndSort();
}

function filterAndSort () {
    showTaskArr();
    //local storage
}

function showTaskArr() {
    tester.innerHTML="";
    todoArr.forEach (elm => {

        const li = document.createElement("li");
        li.innerHTML=`<p>${elm.text}</p>
        <div class="flex_row">
        <p class="margin_right">${elm.amount}</p>
        <img class="icon margin_right" src="check-mark.png" alt="" />
        <img class="icon" src=${elm.liked?"love.png":"love-empty.png"} alt="" /></div>`

        tester.appendChild(li);
        li.addEventListener("click",(evt)=> {
            if (evt.target.classList.contains("icon")){
                 console.log("KLIK",evt.target);
                 elm.liked = !elm.liked;
                    console.log("todoArr", todoArr);
                     filterAndSort();
            }
            
           })

    })
}

unliked.addEventListener("click", like);
liked.addEventListener("click", unlike);


function like () {
    console.log("like clicked")
unliked.src = "love.png";
unliked.classList.add("liked");
unliked.classList.remove("unliked");
}

function unlike () {
    console.log("unlike cliicked");
}