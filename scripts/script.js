let menuToggler = document.querySelector(".menuToggler");
let menu = document.querySelector(".menu");

if(menuToggler){
    menuToggler.addEventListener("click", (e) => {
        if(menuToggler.classList.contains("pushed")) {
            menuToggler.classList.remove("pushed");
            menu.classList.remove("opened");
        } else{
            menuToggler.classList.add("pushed");
            menu.classList.add("opened")
        }
    });
}