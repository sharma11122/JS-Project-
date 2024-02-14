
let songPlayList=[
    {
        "Songname":"Allah Hafiz",
        "SingerName":"K.K",
        "imgName":"song1.jpg",
        "musicName":"song1.mp3"
    },
    {
        "Songname":"Kya mujhe pyar hai",
        "SingerName":"K.K",
        "imgName":"song2.jpg",
        "musicName":"song2.mp3"
    }
]

let play =document.getElementById("play");
let music=document.querySelector("audio");
let imgAnimate=document.getElementById("img")
let prev=document.getElementById("prev");
let next=document.getElementById("next");
let song=document.getElementsByClassName("songName")[0];
let singer=document.getElementsByClassName("singer")[0];



let isPlaying =false;

//play Music
const PlayingMusic=()=>{
    isPlaying=true;
    music.play()
   play.classList.replace("fa-play","fa-pause");
   imgAnimate.classList.add("animate");    

}       
//pause Music
const PauseMusic=()=>{
   isPlaying=false;
   music.pause()
   play.classList.replace("fa-pause","fa-play");
   imgAnimate.classList.remove("animate");  
}
//On clicking play/pause button
play.addEventListener("click",()=>{
    
    isPlaying ? PauseMusic() : PlayingMusic()
})

const SongData=(songPlayList)=>{
       song.textContent=songPlayList.Songname;
       singer.textContent=songPlayList.SingerName;
       imgAnimate.src=`./Image/${songPlayList.imgName}`;
       music.src=`./Song/${songPlayList.musicName}`;

}

const NextSong=()=>{
    songIndex=(songIndex+1) % songPlayList.length;
    SongData(songPlayList[songIndex]);
    PlayingMusic()

}       
const PrevSong=()=>{
    songIndex=(songIndex- 1 +  songPlayList.length) % songPlayList.length;
    SongData(songPlayList[songIndex]);
    PlayingMusic();
}   

let songIndex=0;

next.addEventListener('click',NextSong)
prev.addEventListener('click',PrevSong)
