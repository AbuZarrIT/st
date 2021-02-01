var link = document.querySelector (".item__chevron-btn");
var popup = document.querySelector (".item_button");

link.addEventListener ("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("item_button--active");
    
});


window.addEventListener("keydown", function (evt){
    if (evt.keyCode === 27){
        if (popup.classList.contains("item_button--active")){
            popup.classList.remove("item_button--active");
        }}});