function openinfofirst(){
    let myblock = document.querySelector('.akardinsert');
    //myblock.style.height = "100px";
    //myblock.classList.add('ed');
    let button = document.querySelector('.openbutton');

    if(myblock.classList.contains("ed")) {
        myblock.classList.remove("ed");
        button.innerHTML = "+";    
    } else{
        myblock.classList.add("ed");
        button.innerHTML = "-";    
    }
}
function openinfosecond(){
    let myblock = document.querySelector('#secondInsert');
    //myblock.style.height = "100px";
    //myblock.classList.add('ed');
    let button = document.querySelector('#openbuttonsecond');

    if(myblock.classList.contains("ed")) {
        myblock.classList.remove("ed");
        button.innerHTML = "+";    
    } else{
        myblock.classList.add("ed");
        button.innerHTML = "-";    
    }
}
function openinfothird(){
    let myblock = document.querySelector('#thirdInsert');
    //myblock.style.height = "100px";
    //myblock.classList.add('ed');
    let button = document.querySelector('#openbuttonthird');

    if(myblock.classList.contains("ed")) {
        myblock.classList.remove("ed");
        button.innerHTML = "+";    
    } else{
        myblock.classList.add("ed");
        button.innerHTML = "-";    
    }
}

document.addEventListener('click', function(event) {
    let myblockfs = document.querySelector('.akardinsert');
    let myblocksc = document.querySelector('#secondInsert');
    let myblocktd = document.querySelector('#thirdInsert');

    let button = document.querySelector('.openbutton');
    let buttonfs = document.querySelector('.openbutton');
    let buttonsd = document.querySelector('#openbuttonsecond');
    let buttontd = document.querySelector('#openbuttonthird');
    if (!event.target.matches('.openbutton')) {

      myblockfs.classList.remove("ed");
      myblocksc.classList.remove("ed");
      myblocktd.classList.remove("ed");

      buttonfs.innerHTML = "+";
      buttonsd.innerHTML = "+";
      buttontd.innerHTML = "+";

    }
});



let buttons = [...document.querySelectorAll(".openbutton")];

buttons.forEach(function(button){
    button.addEventListener("click", function(event){
        let el = event.target;
        if(el.nextElementSibling.style.height){
            el.nextElementSibling.style.height = null;
        }
        else{
            el.nextElementSibling.style.height = "100px";
        }
    });
})
