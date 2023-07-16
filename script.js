const pomodoroBtn = document.querySelector('#workTime');
const shortBreakBtn = document.querySelector('#shortBreak')
const longBreakBtn = document.querySelector('#longBreak');


pomodoroBtn.addEventListener('click', pomodoroTimer);
shortBreakBtn.addEventListener('click', shortTimer);
longBreakBtn.addEventListener('click', longTimer);

let audio = new Audio('https://cdn.glitch.global/8d0e04b2-9fba-4e38-98b2-3cb9ac936798/stop.mp3?v=1673645880204');


let amountTimePomodoro = 0;
let amountShortTime = 0;
let amountLongTime = 0;

let timerIdPomodoro;
let timerIdShort;
let timerIdLong;

function pomodoroTimer(){
  stopTimerShort();
  stopTimerLong();

  document.querySelector('#myImg').src = 'https://cdn.glitch.global/8d0e04b2-9fba-4e38-98b2-3cb9ac936798/work.png?v=1673645882903';
  document.querySelector('#timer').textContent = '25:00';

  amountTimePomodoro = 25 * 60;
  amountShortTime = 0;
  amountLongTime = 0;

  shortBreakBtn.addEventListener('click', shortTimer);
  longBreakBtn.addEventListener('click', longTimer);
  pomodoroBtn.removeEventListener('click', pomodoroTimer);

  function calculateTimePomodoro(){

    const countdown = document.querySelector('#timer');

    let minutesPomodoro = Math.floor(amountTimePomodoro / 60);
    let secondsPomodoro = amountTimePomodoro%60;

    amountTimePomodoro--;

    if(secondsPomodoro < 10){
      secondsPomodoro = '0' + secondsPomodoro;
    }

    countdown.textContent = `${minutesPomodoro} : ${secondsPomodoro}`;
    
  
    if (amountTimePomodoro < 0){
      stopTimerPomodoro();
      amountTimePomodoro = 0;
      audio.play();
    }
    else{
      audio.pause();
    }
  }

  timerIdPomodoro = setInterval(calculateTimePomodoro, 1000);
}

function stopTimerPomodoro(){
  clearInterval(timerIdPomodoro);
}

function shortTimer(){
  stopTimerPomodoro();
  stopTimerLong();

  document.querySelector('#myImg').src = 'https://cdn.glitch.global/8d0e04b2-9fba-4e38-98b2-3cb9ac936798/shortbreak.png?v=1673645878536'
  document.querySelector('#timer').textContent = '5 : 00';

  amountTimePomodoro = 0;
  amountLongTime = 0;

  pomodoroBtn.addEventListener('click', pomodoroTimer);
  longBreakBtn.addEventListener('click', longTimer);

  amountShortTime = 5 * 60;

  shortBreakBtn.removeEventListener('click', shortTimer);

  function calculateShortBreak(){

    const countdown = document.querySelector('#timer');

    let minutesShort = Math.floor(amountShortTime/60);
    let secondsShort = amountShortTime%60; 

    amountShortTime--;

    if(secondsShort < 10){
      secondsShort = '0' + secondsShort;
    }

    countdown.textContent = `${minutesShort} : ${secondsShort}`;
    if (amountShortTime < 0){
      stopTimerShort();
      amountShortTime = 0;
      audio.play()
    }
    else{
      audio.pause();
    }
  }

  timerIdShort = setInterval(calculateShortBreak, 1000);
}
function stopTimerShort(){
  clearInterval(timerIdShort);
}


function longTimer(){
  stopTimerPomodoro();
  stopTimerShort();

  document.querySelector('#myImg').src = 'https://cdn.glitch.global/8d0e04b2-9fba-4e38-98b2-3cb9ac936798/longbreak.png?v=1673645873992';
  document.querySelector('#timer').textContent = '15 : 00';

  amountTimePomodoro = 0;
  amountShortTime = 0;

  pomodoroBtn.addEventListener('click', pomodoroTimer);
  shortBreakBtn.addEventListener('click', shortTimer);

  amountLongTime = 15 * 60;

  longBreakBtn.removeEventListener('click', longTimer);

  function calculateLongBreak(){

    const countdown = document.querySelector('#timer');

    let minutesLong = Math.floor(amountLongTime/60);
    let secondsLong = amountLongTime%60; 

    amountLongTime--;

    if(secondsLong < 10){
      secondsLong = '0' + secondsLong;
    }

    countdown.textContent = `${minutesLong} : ${secondsLong}`;
    if (amountLongTime < 0){
      stopTimerLong();
      amountLongTime = 0;
      audio.play()
    }
    else{
      audio.pause();
    }
  }

  timerIdLong = setInterval(calculateLongBreak, 1000);
}
function stopTimerLong(){
  clearInterval(timerIdLong);
}

