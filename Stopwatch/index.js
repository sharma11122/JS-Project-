

var Start =document.getElementById("start");
var Stop =document.getElementById("stop");
var Reset =document.getElementById("reset");
let Hour=document.getElementById("hours")
let Min=document.getElementById("min")
let Sec=document.getElementById("sec")
let Counter=document.getElementById("count")




let sec=0;
let min=0;
let hour=0;
let count=0;
let timer;




Start.addEventListener("click",()=>{
      timer=true;
      StartWatch()

});


Stop.addEventListener("click",()=>{
    timer=false;


});
Reset.addEventListener("click",()=>{
    timer=false
    
    sec=0;
    min=0;
    hour=0;
    count=0;
    timer;
   Hour.innerHTML="0"+hour;
   Sec.innerHTML="0"+sec;
   Min.innerHTML="0"+min;
   Counter.innerHTML="0"+count;

});

const StartWatch=()=>{
    
    if(timer){
        count++

        if(count==100){
            sec++;
            count=0;
        }
        
        if(sec==60){
            min++;
            sec=0
        }
        if(min==60){
            hour++;
            sec=0;
            min=0;
        }
    
        let countString =count;
        let secString=sec;
        let minString=min;
        let hourString=hour

     if(count<10){
        countString="0"+countString;

     }
     if(sec<10){
       secString="0"+secString;

     }
     if(min<10){
        minString="0"+minString;

     }
     if(hour<10){
          hourString="0"+hourString;

     }
     
     Sec.innerHTML=secString
     Counter.innerHTML=countString;
     Min.innerHTML=minString;
     Hour.innerHTML=hourString;

    setTimeout(StartWatch,10);
      
     
}}