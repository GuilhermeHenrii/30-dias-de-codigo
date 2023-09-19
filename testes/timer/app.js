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

document.addEventListener('click', e => {
  const el = e.target;
  if(el.classList.contains('start')){
    setTimer = setInterval( () => {
      timer.innerHTML = getHoursInSeconds(cont);
      cont++;
    }, 1);
  }

  if(el.classList.contains('stop')){
    clearInterval(setTimer);
  }

  if(el.classList.contains('reset')){
    cont = 0;
    timer.innerHTML = getHoursInSeconds(cont);
  }
})
