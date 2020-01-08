var next = document.querySelector(".next");
var container = document.querySelector(".container");


next.addEventListener("click", function(){
    container.classList.toggle("view-change");
})