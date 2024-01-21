let List = {
    classes: [],
    attributes: [],
    items: [],

    addClass: function(className){
        this.classes.push(className);
    },
    addAttribute: function(attributeName, attributeValue){
        let attr = { name: "", value: ""};

        attr.name = attributeName;
        attr.value = attributeValue;

        this.attributes.push(attr);
    },
    addItem: function(item){
        this.items.push(item);
    },

    render()
    {
        let ul = document.createElement("ul");
        
        this.classes.forEach(function(classes){
            ul.classList.add(classes);
        });
        
        this.items.forEach(function(item){
            let li = document.createElement("li");
            li.innerText = item.text;
            ul.prepend(li);
        });
        
        
        document.body.prepend(ul);
        
    }
};
// let texts = [text = 'first', href = "https://youtube.com", 'second', 'third', 'fourth'];
let texts = ['first', 'second', 'third', 'fourth'];

texts.forEach(function(text){   
    let item = {
        text: "",
        href: "",
        setText: function(text) 
        {
            this.text = text;
        },
        setHref: function(href) 
        {
            this.href = href;
        }
    }
    item.setText(text);
    
    List.addItem(item);
});


List.addClass("list-unstiled");
List.addClass("list-inline");

console.dir(List)

List.render();