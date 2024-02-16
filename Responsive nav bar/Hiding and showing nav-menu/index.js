

var icon=document.getElementById("menu");
var NavbarExpanded=document.getElementById("expanded");
var close=document.getElementById("close");



const  ShowMenu=()=>{
   NavbarExpanded.style.display="block";
   close.style.display="block";
   icon.style.display="none";

 
}

const  CloseMenu=()=>{
    NavbarExpanded.style.display="none";
    close.style.display="none";
   icon.style.display="block";
  
 }

icon.addEventListener("click",ShowMenu);
close.addEventListener("click",CloseMenu)