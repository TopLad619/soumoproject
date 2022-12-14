let navbar = document.querySelectorAll(".navbar a");
let bodyId = document.querySelector("body").id;

for(let link of navbar){
    if(link.dataset.active == bodyId){
        link.classList.add("active");
    }
}