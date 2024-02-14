
let quotes =[

    "The more our fingers are getting skilled on keypad the more we are losing the art of holding the pen.",
    "Rules for navigating the net,Or people will roll their eyeLest you can't roll the R rect: Literally, don´t dink and dive!",
    "Actual conversation is still okay... to a writer who types all day, texting is like never leaving work.",
    "Took to typing as quickly and loudly as possible and yelling, “I’m in!” when accessing basic programs. Made me feel like a hacker.",
    "I hate when people start typing while I'm still typing like I know you see those dots dude wait your turn",
    "Communication is a skill that you can learn. It's like riding a bicycle or typing. If you're willing to work at it, you can rapidly improve the quality of every part of your life."
]

var body = document.body;

var colors =["red", "yellow", "pink" , "purple" ,"blue"];
var colorIndex=0;

var userText = document.getElementById("usertext");
var DisplayText= document.getElementsByClassName("displayText")[0];
var btn1 =document.getElementsByClassName("btn")[0]; 
var DisplayBox= document.getElementsByClassName("textOutput")[0];
var result = document.getElementById("result");


let startTime, EndTime ,TotalTime ;


//To get array value for sentence
let randomNum = Math.floor(Math.random()*quotes.length);




const StartTyping=()=>{
   
    // userText.disabled=false
    // DisplayBox.disabled=false;
    btn1.innerHTML="Finish";    
    DisplayText.innerHTML=quotes[randomNum];
    DisplayBox.style.display= "inline";
    userText.style.backgroundColor="whitesmoke"

 
    let date = new Date ()
     startTime =date.getTime()
     console.log(startTime)
     
    

}

//calculate type speed
const TypingSpeed=(TotalTime)=>{


    
    let inputWords = userText.value.trim();
    let ActualWords = inputWords === ''? 0 : inputWords.split(" ").length;

    if(ActualWords!==0){

        let typing_speed =(ActualWords / TotalTime) * 60;
        typing_speed=Math.round(typing_speed)

        result.innerHTML=`__________Output_________<br><br>
                          Typing Speed Words per minutes - ${typing_speed}
                          <br><br>
                         Total Word Written : ${ActualWords} <br><br>
                         Time Taken : ${TotalTime} sec
        `

    }else{
        result.innerHTML = `
        __________Output_________<br><br>
        Typing Speed Words per minutes : 0
        <br><br>
       Time Taken : ${TotalTime} sec`;
    }
}

const FinishTyping=()=>{
    btn1.innerHTML="Start";
    
    let date = new Date ()
    EndTime =date.getTime()

    TotalTime =(EndTime-startTime)/ 1000;
    console.log(startTime)
    console.log(TotalTime)
    
    TypingSpeed(TotalTime)
     
       DisplayText.innerHTML="";
        userText.value="";
    
    
}






btn1.addEventListener('click',()=>{
   switch(btn1.innerHTML.toLocaleLowerCase()){
      
    case "start":
        userText.removeAttribute('disabled');
        userText.style.display="inline"; 
        result.style.display="none";
        StartTyping()
        break;

     case "finish":
        userText.style.display="none";
        DisplayBox.style.display="none"; 
        result.style.display="inline";
         FinishTyping()
         break;
        }   
   
})


// setInterval(()=>{
//     body.style.backgroundColor=colors[colorIndex];

//     if(!colors[colorIndex]){
//         colorIndex=0
//     }
//     else{
//         colorIndex++;
//     }
// } ,1000)




//getElementsByClassName returns array so we need to fetch its first index



//Input text will disabled at first







