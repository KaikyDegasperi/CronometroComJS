
//VAriaveis utilizada para cronometrar
let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let cron;
//recuperando os botões
let btnStart=document.querySelector('.start')
let btnPause=document.querySelector('.pause')
let btnReset=document.querySelector('.reset')

//Recuperando os campos spans utilizados
let campoHour=document.getElementById('hour')
let campoMinute=document.getElementById('minute')
let campoSecond=document.getElementById('second')
let campoMillisecond=document.getElementById('millisecond')


//funções necessárias
function start() {
    pause();

    cron = setInterval(() => { timer(); }, 10);
  }
  
  function pause() {
    clearInterval(cron);
  }
  
  function reset() {
    pause()
    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 0;
    campoHour.innerText = '00:';
    campoSecond.innerText = '00:';
    campoMinute.innerText = '00:';
    campoMillisecond.innerText = '000';
  }

  function timer() {
    if ((millisecond += 10) == 1000) {
      millisecond = 0;
      second++;
    }
    if (second == 60) {
      second = 0;
      minute++;
    }
    if (minute == 60) {
      minute = 0;
      hour++;
    }
    campoHour.innerText = returnData(hour);
    campoMinute.innerText = returnData(minute);
    campoSecond.innerText = returnData(second);
    campoMillisecond.innerText = returnData(millisecond);
  }
//A seguinte função será responsável por 'formatar' o campo do cronometro
  function returnData(input) {
    return input > 10 ? input : `0${input}:`
  }

//chamando as funções

btnStart.addEventListener('click',() => start())
btnPause.addEventListener('click',() => pause())
btnReset.addEventListener('click',() => reset())