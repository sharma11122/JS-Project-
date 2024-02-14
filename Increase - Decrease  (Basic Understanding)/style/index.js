

var num = 0;

document.getElementById("count").innerText=num;

var btnIncrease= document.getElementsByClassName("increase")
var btnDcrease= document.getElementsByClassName("decrease")
var btnDcrease= document.getElementsByClassName("decrease")
var clearBtn= document.getElementsByClassName("clear")


function IncreaseCount(){

     num =num+1;
     document.getElementById("count").innerText=num;


}
function DecreaseCount(){

    num =num-1;
    document.getElementById("count").innerText=num;


}

function ClearAll(){

     num=0;
    document.getElementById("count").innerText=num;


}