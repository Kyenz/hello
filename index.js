// Grabbing the objects
const timer = document.querySelector("#timeDisplay");
const startButt = document.querySelector("#start");
const stopButt = document.querySelector("#pause");
const resetButt = document.querySelector("#reset");

//-------------------Start--------------
let hrs = 0;
let mins = 0;
let secs = 0;
let isPause = true;
let timerId = null;
let startTime = 0;
let elapsedTime = 0;

startButt.addEventListener("click", () => {
    if(isPause){
        isPause = false;
        startTime = Date.now() - elapsedTime;
        timerId = setInterval(update, 1000);
    }
});
stopButt.addEventListener("click", () => {
    if(!isPause){
        isPause = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(timerId);
    }
});
resetButt.addEventListener("click", () => {
    clearInterval(timerId);
    hrs = 0;
    mins = 0;
    secs = 0;
    startTime = 0;
    elapsedTime = 0;
    isPause = true;
    timerId = null;
    timer.textContent = "00:00:00";
});

function update(){
    console.log(startTime);
    elapsedTime = Date.now() - startTime;
    
    secs = Math.floor((elapsedTime / 1000) % 60);
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);
    
    let formatTime = paddingZero(hrs.toString()) + ":" + paddingZero(mins.toString()) + ":" + paddingZero(secs.toString());
    timer.textContent = formatTime;
}

function paddingZero(num){
    return (num.length == 1) ? ("0" + num) : num;
}