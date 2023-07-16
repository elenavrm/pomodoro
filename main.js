/*const pomodoroBtn = document.querySelector("#workTime");
const shortBreakBtn = document.querySelector("#shortBreak");
const longBreakBtn = document.querySelector("#longBreak");

pomodoroBtn.addEventListener("click", () => {
    timer(25)
    document.querySelector('#myImg').src = 'https://cdn.glitch.global/8d0e04b2-9fba-4e38-98b2-3cb9ac936798/work.png?v=1673645882903';
    document.querySelector('#timer').textContent = '25:00';
});
shortBreakBtn.addEventListener("click", () => {
    timer(5)
    document.querySelector('#myImg').src = 'https://cdn.glitch.global/8d0e04b2-9fba-4e38-98b2-3cb9ac936798/shortbreak.png?v=1673645878536'
    document.querySelector('#timer').textContent = '5 : 00'
});
longBreakBtn.addEventListener("click", () => {
    timer(15)
    document.querySelector('#myImg').src = 'https://cdn.glitch.global/8d0e04b2-9fba-4e38-98b2-3cb9ac936798/longbreak.png?v=1673645873992';
    document.querySelector('#timer').textContent = '15 : 00';
});

let audio = new Audio('https://cdn.glitch.global/8d0e04b2-9fba-4e38-98b2-3cb9ac936798/stop.mp3?v=1673645880204');

let amountTime = 0;
let timerId;

function timer(time) {
    amountTime = time * 60;
    stopTimer()

    function calculateTime() {
        const countdown = document.querySelector("#timer");
    
        let minutes = Math.floor(amountTime / 60);
        let seconds = amountTime % 60;
    
        amountTime--;
    
        if (amountTime < 0) {
            stopTimer();
            amountTime = 0;
            audio.play();
        }
    
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
    
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
    
        countdown.textContent = `${minutes} : ${seconds}`;
    }
        timerId = setInterval(calculateTime, 1000);
}
function stopTimer() {
    clearInterval(timerId);
}
*/

const timeArray = [
    {
        time: 25,
        title: "work time",
        image: "work.png",
    },
    {
        time: 5,
        title: "short break",
        image: "shortbreak.png",
    },
    {
        time: 15,
        text: "long break",
        image: "longbreak.png",
    },
]

const buttons = document.querySelectorAll('.btn');
buttons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        timer(timeArray[index].time);
        
    })
})

let amountTime = 0;
let timerId;

function timer(time) {
    amountTime = time * 60;
    stopTimer()

    function calculateTime() {
        const countdown = document.querySelector("#timer");
    
        let minutes = Math.floor(amountTime / 60);
        let seconds = amountTime % 60;
    
        amountTime--;
    
        if (amountTime < 0) {
            stopTimer();
            amountTime = 0;
        }
    
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
    
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
    
        countdown.textContent = `${minutes} : ${seconds}`;
    }
        timerId = setInterval(calculateTime, 1000);
}

function stopTimer() {
    clearInterval(timerId);
}


