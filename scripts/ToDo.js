function addNewTask(event){
    let list = document.querySelector(".ToDoBlockList");
    let tasks = document.getElementsByClassName("ToDoBlock");
    let input = document.querySelector('input[name="todo-text"]');
//    console.log(tasks.length);
    if(list){
        if(input.value.trim() != ""){
            list.insertAdjacentHTML(
            "beforeend",
            `
            <div class="ToDoBlock"><span>${tasks.length + 1}. ${input.value}</span>   <div>  <button type="button" onclick="markAsCompleteTask(event)" id="CheckTaskButton"> <img src="../../images/OIP (1).jpg" alt=""></button> <button type="button" onclick="deleteTask(event)" id="deleteButton"><img src="../../images/defc85467e160fa5e1fb24f89a623bcc.jpg" alt=""></button> </div> </div>
            `
            );
            input.value = ' ';
        }else{
            alert('Заполните поле');
        }
        }else{
            console.log(' "list" not founded');
        }
       
    
    
    
    /*let l = list.innerHTML;
    let newTaskCode = `
    <div class="ToDoBlock">${tasks.length + 1} ${input.value}</div>     
    `;
    list.innerHTML = l + newTaskCode;
    */
}

function deleteTask(event){
    if(confirm("Вы действительно хотите удалить элемент?")){
        event.target.parentElement.parentElement.parentElement.remove();
    }
}

function markAsCompleteTask(event){
        event.target.parentElement.parentElement.parentElement.style.textDecoration = "line-through";

    //sevent.target.previousElementSibling.style.color = "red";
}




/*
let button = document.querySelector(".checkTask");
function markAsCompleteTask(event){
    let button = document.querySelector(".checkTask");
if(button){
    button.addEventListener("click", (e) => {
        if(button.classList.contains("checked")) {
            button.classList.remove("checked");
        } else{
            button.classList.add("checked");
        }
    });
}
}
*/      

/*
function deleteTask(event){
    let button = event.target.parentElement;

    if (confirm("Вы действительно хотите удалить задачу?")) {
        if(event.target.localName == "i") {
            button.parentElement.parentElement.remove();
        } else{
            button.parentElement.remove();
        }
    }
}
*/