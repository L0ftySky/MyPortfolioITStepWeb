let page = 0;

document.addEventListener("DOMContentLoaded", () => {
    loadContent();
})

window.addEventListener("scroll", function(){
    const screenheight = window.innerHeight;
    const height = document.body.offsetHeight;
    const scrolled = window.scrollY;

    if((scrolled + screenheight) >= height){
        loadContent();
    }
});

function loadContent(){
    let xhr = new XMLHttpRequest();
    let url = new URL("https://jey.of.by/");

    if(page > 0){
        url.searchParams.set("page", page);
    }

    xhr.open("GET", url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.responseType = 'json';
    xhr.send();

    xhr.onload = function () {
        if (xhr.status != 200){
            alert(`Error ${xhr.status}: ${xhr.statusText}`);
        } else{
            let products = xhr.response;
            renderProducts(products);
            page += 1;
        }
    }
}


function renderProducts(products){
    if(products.length > 0){
        let productsList = document.getElementsByClassName("cataloglist")[0];
        let productsCode = '';

        products.forEach((product) => {

            //let price = (product.price.new > 0) ? `<span class = price> ${product.prices.new} rub. </span><span>`;

            productsCode += 
            `
            <div class="catalogblock">
                <img src="${product.image}" alt="${product.name}">
                <span class="catname">Asus Rog Zephyrus G16 2023</span>
                <span class="catdescribe">${product.tieser.slice(0, 90)}...</span>
                <span class="catprice">${product.prices.old}</span>
                <div class="buttoncont">
                    <a href="#" class="button" id="morebutton">More</a>
                    <a href="#" class="button" id="adtcbutton">To Cart</a>
                </div>
            </div>
            `
        });      
          
        productsList.insertAdjacentHTML("beforeend", productsCode);

    };
};