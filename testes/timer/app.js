function getHoursInSeconds(segundos){
  const date = new Date(segundos * 1000);
  return date.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone:'UTC'
  });
}

const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const timer = document.querySelector('.timer');
let cont = 0;
let setTimer;
let timerOn = false;

document.addEventListener('click', e => {
  const el = e.target;
  if(el.classList.contains('start') && timerOn === false){
    timerOn = true;
    setTimer = setInterval( () => {
      timer.innerHTML = getHoursInSeconds(cont);
      cont++;
    }, 1000);
  }

  if(el.classList.contains('stop')){
    clearInterval(setTimer);
    return;
  }

  if(el.classList.contains('reset')){
    cont = 0;
    timer.innerHTML = getHoursInSeconds(cont);
    return;
  }
})
