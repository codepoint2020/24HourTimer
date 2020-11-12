let hourDisplay = document.querySelector('#hourDisplay');
let minutesDisplay = document.querySelector('#minutesDisplay');
let secondsDisplay = document.querySelector('#secondsDisplay');

let startBtn = document.querySelector('#startBtn');
let pauseBtn = document.querySelector('#pauseBtn');
let resetBtn = document.querySelector('#resetBtn');
let stopBtn = document.querySelector('#stopBtn');

let myTimer;
let myCounter = 0;
let myHours = 0;
let myMinutes = 0;
let mySeconds = 0;

pauseBtn.disabled = true;
resetBtn.disabled = true;
stopBtn.disabled = true;

startBtn.addEventListener('click', function () {

    startBtn.innerHTML = 'continue';
    startBtn.disabled = true;
    pauseBtn.disabled = false;
    resetBtn.disabled = false;
    stopBtn.disabled = false;

    myTimer = setInterval( function () {

        myCounter++;
        mySeconds =  myCounter;

        //Start counting for mySeconds
        if (mySeconds > 59) {
            secondsDisplay.innerHTML =  "00";
            myCounter = 0;
            myMinutes++;
            
        } else if (mySeconds > 9) {
            secondsDisplay.innerHTML =  mySeconds;
        } else {
            secondsDisplay.innerHTML = "0" + mySeconds;
        }

        //Start counting for minutes

        if (myMinutes > 59) {

            minutesDisplay.innerHTML =  "00";
            myHours++;
            
        } else if (myMinutes > 9) {
            minutesDisplay.innerHTML =  myMinutes;
        } else {
            minutesDisplay.innerHTML = "0" + myMinutes;
        }


        if (myHours > 58) {

            hourDisplay.innerHTML =  "00";
            clearInterval(myTimer);
            
        } else if (myHours > 9) {

            hourDisplay.innerHTML =  myHours;

        } else {

            hourDisplay.innerHTML = "0" + myHours;

        }
           
    }, 1000)

})


pauseBtn.addEventListener('click', function () {
    
    startBtn.disabled = false;
    startBtn.innerHTML = 'continue';
    pauseBtn.disabled = true;
    clearInterval(myTimer);
    
})


stopBtn.addEventListener('click', function () {

    clearInterval(myTimer);
    stopBtn.disabled = true;
    startBtn.disabled = false;

    secondsDisplay.innerHTML = "00";
    minutesDisplay.innerHTML = "00";
    hourDisplay.innerHTML = "00";

    myCounter = 0;
    myHours = 0;
    myMinutes = 0;
    mySeconds = 0;

    startBtn.innerHTML = 'start';
    pauseBtn.disabled = true;


})


resetBtn.addEventListener('click', function () {

    clearInterval(myTimer);

    secondsDisplay.innerHTML = "00";
    minutesDisplay.innerHTML = "00";
    hourDisplay.innerHTML = "00";

    myCounter = 0;
    myHours = 0;
    myMinutes = 0;
    mySeconds = 0;

    startBtn.disabled = false;
    startBtn.innerHTML = 'start';
    resetBtn.disabled = true;

})


