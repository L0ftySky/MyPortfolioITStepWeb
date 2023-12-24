let products = [
    { name: 'Вода', price: 5, amount: 30},
    { name: 'Хлеб', price: 15, amount: 15},
    { name: 'Туалетная бумага', price: 30, amount: 5 }
];
function loadSite(event, products){

    

    console.log("HTML Load Finished"); 

    let div = document.createElement("div");
    div.classList.add("tablebody");
    document.body.append(div); 

    for(var i = 0; i < 1; i++){
        div.insertAdjacentHTML(
            "afterbegin",
            `
            <div class = blockdiv> 
                <div class = columnhead>Имя товара</div>
                <div class = columnhead>Количество</div>
                <div class = columnhead>Цена</div>
            </div>
            `
            )
    }
    for(var i = 0; i < 3; i++){
        div.insertAdjacentHTML(
            "beforeend",
            `
            <div class = list> 
                <div class = stroka>Имя товара</div>
                <div class = stroka>Имя товара</div>
                <div class = stroka>Имя товара</div>
            </div>
            `
            )
    }
    for(var i = 0; i < 1; i++){
        div.insertAdjacentHTML(
            "beforeend",
            `
            <div class = bottomdiv> 
                <div class = result>Имя товара</div>
                <div class = result>Количество</div>
                <div class = result>Цена</div>
            </div>
            `
            )
    }
}
console.log(loadSite());