


var closeIcon =document.querySelector(".mobile_icon");
var Header=document.querySelector(".header");


const ToggleCloseMenu=()=>{
  Header.classList.toggle("active");
}

closeIcon.addEventListener("click",()=>{ToggleCloseMenu()})