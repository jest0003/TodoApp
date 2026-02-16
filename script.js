const todoText = document.querySelector("#input_text");
const todoBtn = document.querySelector("#submit_task");
//const todoContainer = document.querySelector("");
const todoArr = [];
const unliked = document.querySelector(".unliked");
const liked = document.querySelector(".liked");
const tester = document.querySelector(".tester");

todoBtn.addEventListener("click", submitTodo)

function submitTodo () {
    const todoObject = {text:todoText.value, done:false, liked:false,id:self.crypto.randomUUID ()}
    todoArr.push(todoObject);
    console.log("todoArr", todoArr);
    filterAndSort();
}

function filterAndSort () {
    showTaskArr();
}

function showTaskArr() {
    tester.innerHTML="";
    todoArr.forEach (elm => {

        const li = document.createElement("li")
        console.log(elm.liked)
        li.innerHTML=`<h1>${elm.text}</h1>
        <img class="icon margin_right" src=${elm.liked?"love.png":"love-empty.png"} alt="" />`

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