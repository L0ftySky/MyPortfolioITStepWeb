function sendForm(event){
    let error = {};

    let address = event.target[6].value;
    if(address.length < 10){
        error.address = "Ваш адрес слишком короткий.";
        let addressField = document.getElementById("address-error");
        addressField.innerHTML = error.address;
        addressField.previousElementSibling.classList.add("error");
    }else{
        error.address = null;
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
        error.name = null;
        let nameField = document.getElementById('name-error');
        nameField.innerHTML = '';
        nameField.previousElementSibling.classList.remove("error");
    }

    let phone = event.target[3].value;
    let phoneTemplate = /^\+375[0-9]{9}$/

    if(!phoneTemplate.test(phone)){
        error.phone = "Введите правильный номер телефона(+375XXXXXXXXXX)";
        let phoneField = document.getElementById("phone-error");
        phoneField.innerHTML = error.phone;
        phoneField.previousElementSibling.classList.add("error");
    }else{
        error.phone = null;
        let phoneField = document.getElementById('phone-error');
        phoneField.innerHTML = '';
        phoneField.previousElementSibling.classList.remove("error");
    }

    return false;
}


