if(window.localStorage.getItem("users"))
{

    let users = JSON.parse(window.localStorage.getItem("users"));
    let cardlist = document.getElementsByClassName("card-list")[0];

    if(cardlist){
        if(users.length > 0){

            users.forEach(function(user){
                let newCard = 
            `
            <div class="card" draggable="true" ondragstart="startDrag(event) id="user-${user.id}">
            <img src="images/profile-icon2.png" alt="avatar">
            <div class="card-name">${user.name}</div>
            <div class="card-age">Возраст: ${user.age} лет</div>
            <button type="button" onclick ="editUser(${user.id}")>Инфо</button>
            </div>
            `
            cardlist.insertAdjacentHTML("beforeend", newCard);
            });
        }    
    }
}
function editUser(event){

}
function sendForm(event){
    let error = {};

    let address = event.target[6].value;
    let addressTemplate = /[\w\W\d\D]{10,}/g;

    if(!addressTemplate.test(address)){
        error.address = "Ваш адрес слишком короткий.";
        let addressField = document.getElementById("address-error");
        addressField.innerHTML = error.address;
        addressField.previousElementSibling.classList.add("error");
    }else{

        let addressField = document.getElementById("address-error");
        addressField.innerHTML = '';
        addressField.previousElementSibling.classList.remove("error");
    }
    
    let name = event.target[0].value;
    let nameTemplate = /^[а-яА-Я\s]*[а-яА-Я\s]$/g;

    if(!nameTemplate.test(name)){
        error.name = "Введите корректное имя";
        let nameField = document.getElementById("name-error");
        nameField.innerHTML = error.name;
        nameField.previousElementSibling.classList.add("error");
    }else{

        let nameField = document.getElementById('name-error');
        nameField.innerHTML = '';
        nameField.previousElementSibling.classList.remove("error");
    }

    // ПОЧТА
    /*let mailLink = event.target[5].value;
    let gitLinkTemplate = /^https\:\/\/github.com\[a-zA-Z0-9_-]/g;

    if(!gitLinkTemplate.test(gitLink)){
        error.gitLink = "Введите корректную ссылку на гитхаб ( https://github.com/.... )";
        let gitLinkField = document.getElementById("gitLink-error");
        gitLinkField.innerHTML = error.gitLink;
        gitLinkField.previousElementSibling.classList.add("error");
    }else{

        let gitLinkField = document.getElementById('gitLink-error');
        gitLinkField.innerHTML = '';
        gitLinkField.previousElementSibling.classList.remove("error");
    }
*/

    /*let gitLink = event.target[5].value;
    let gitLinkTemplate = /^https\:\/\/github.com\[a-zA-Z0-9_-]/g;

    if(!gitLinkTemplate.test(gitLink)){
        error.gitLink = "Введите корректную ссылку на гитхаб ( https://github.com/.... )";
        let gitLinkField = document.getElementById("gitLink-error");
        gitLinkField.innerHTML = error.gitLink;
        gitLinkField.previousElementSibling.classList.add("error");
    }else{

        let gitLinkField = document.getElementById('gitLink-error');
        gitLinkField.innerHTML = '';
        gitLinkField.previousElementSibling.classList.remove("error");
    }
*/

    let phone = event.target[3].value;
    let phoneTemplate = /^\+375[0-9]{9}$/

    if(!phoneTemplate.test(phone)){
        error.phone = "Введите правильный номер телефона(+375XXXXXXXXXX)";
        let phoneField = document.getElementById("phone-error");
        phoneField.innerHTML = error.phone;
        phoneField.previousElementSibling.classList.add("error");
    }else{

        let phoneField = document.getElementById('phone-error');
        phoneField.innerHTML = '';
        phoneField.previousElementSibling.classList.remove("error");
    }


    let date = event.target[1].value;
    let gender = event.target[2].value;
    let email = event.target[4].value;
    let url = event.target[5].value;

    let errors = 0;
    for(key in error){
        errors++;
    }



    if(errors){
        return false;
    }else{
        let list = document.getElementsByClassName("card-list")[0];

        let now = new Date();
        let birthday = new Date(date);
        let age = now.getFullYear() - birthday.getFullYear();
        let id = Math.floor(Math.random() *1000);


        list.insertAdjacentHTML(
            "beforeend", 
            `
            <div class="card" draggable="true" ondragstart="startDrag(event) id="user-${now.getMilliseconds()}">
            <img src="images/profile-icon2.png" alt="avatar">
            <div class="card-name">${name}</div>
            <div class="card-age">Возраст: ${age} лет</div>
            <button type="button">Инфо</button>
            </div>
        `);
        /*
            let userData = `user-${id}&${event.target[0].value}&${event.target[1].value}&${now.getFullYear() - birthday.getFullYear()}&${event.target[2].value}&${event.target[3].value}&${event.target[4].value}&${event.target[5].value}&${event.target[6].value}`;
        window.localStorage.setItem(`user-${id}`, userData)
        */
        /*
        window.localStorage.setItem("name", `user-${id}`);
        window.localStorage.setItem("birthday", event.target[1].value);
        window.localStorage.setItem("age", now.getFullYear() - birthday.getFullYear());
        window.localStorage.setItem("pol", event.target[2].value);
        window.localStorage.setItem("phone", event.target[3].value);
        window.localStorage.setItem("email", event.target[4].value);
        window.localStorage.setItem("url", event.target[5].value);
        window.localStorage.setItem("address", event.target[6].value);
        */

        let user = {
            id: id,
            name: event.target[0].value,
            birthday: event.target[1].value,
            age: now.getFullYear() - birthday.getFullYear(),
            pol:  event.target[2].value,
            phone: event.target[3].value,
            email: event.target[4].value,
            url: event.target[5].value,
            address: event.target[6].value
        }

        //let userData = JSON.stringify(user);

        //window.localStorage.setItem("user", userData);

        let users = [];

        if(window.localStorage.getItem("users"))
        {
            users = JSON.parse(window.localStorage.getItem("users"));
        }

        users.push(user); 

        window.localStorage.setItem("users", JSON.stringify(users));
    }
    return false;
}

function startDrag(event){
    event.dataTransfer.setData("text/html", event.target.id);

    event.dataTransfer.effectAllowed = "move"; // copy / link / ...
}

function enterDrag(event){
  //  event.preventDefault();   - необязательно
    event.dataTransfer.dropEffect = "move";
    event.target.classList.add("active");
}

function leaveDrag(event){
    event.target.classList.remove("active");
}

function endDrag(event){
    let cart = document.getElementsByClassName("trashbin")[0];

    if(confirm("Вы действительно хотите удалить карточку?")){
        let elementId = e.dataTransfer.getData("text/html");
        let el = document.getElementsById(elementId);

        if(el){
            cart.classList.remove("active");
            el.remove();
            cart.classList.add("action");
                setInterval(() =>{ cart.classList.remove("action") }, 500);
        }
    }else{
        cart.classList.remove("active");
    }
}

