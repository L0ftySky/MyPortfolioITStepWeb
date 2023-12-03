function addNewTask(event){
    let list = document.querySelector(".ToDoBlockList");
    let tasks = document.getElementsByClassName("ToDoBlock");
    let input = document.querySelector('input[name="todo-text"]');
    console.log(tasks.length);
    list.insertAdjacentHTML(
        "beforeend",
        `
        <div class="ToDoBlock">${tasks.length + 1}. ${input.value}</div>
        `
    );
    input.value = ' ';

    
    
    /*let l = list.innerHTML;
    let newTaskCode = `
    <div class="ToDoBlock">${tasks.length + 1} ${input.value}</div>     
    `;
    list.innerHTML = l + newTaskCode;
    */

}