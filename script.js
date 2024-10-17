
function makeBubble(){
    let bubble = document.getElementById("pbottom")
for(var i =1;i<=198;i++){
    bubble.innerHTML += `<div class="bubble">${Math.floor(Math.random()*10)}</div>`
}
}
 makeBubble();
var timer = 60;
let tt = document.getElementById("timer")
function runTimer(){
   var timerinterval =  setInterval(() => {
        if(timer>0){
            timer--;
            document.querySelector("#timerValue").textContent = timer;
        }
        else{
            clearInterval(timerinterval);
        }
       
    }, 1000);
}
// runTimer();
var hitValue = 0;
let hitVal = document.getElementById("hitVal");
function getNewHit(){
   hitValue = Math.floor(Math.random()*10);
  hitVal.innerHTML = hitValue;
}
// let a = getNewHit();
// getNewHit();

// let scoreCont = document.getElementById("scoreVal");
let score = 0;
function increaseScore(){
    score+=10;
    let scoreCont = document.getElementById("scoreVal");
    scoreCont.textContent = score;
}
document.querySelector("#pbottom").addEventListener("click", function(dets){
    var clickedNum = Number(dets.target.textContent);
    if(clickedNum === hitValue){
        increaseScore();
        makeBubble();
        getNewHit();
        // makeBubble();
    }
})
runTimer();
makeBubble();
getNewHit();

