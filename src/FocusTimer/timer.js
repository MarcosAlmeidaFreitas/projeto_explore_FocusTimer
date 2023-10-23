import state from "./state.js"
import * as el from './elements.js'

export function updateDisplay(minutes, seconds){
  //se caso caso a variavel minutes do cabeçalho da função for nulo, 
  //o operador ?? está dizendo que ele vai preencher com o state.minutes 
  minutes = minutes ?? state.minutes;

  seconds = seconds ?? state.seconds;

  el.minutes.textContent = String(minutes).padStart(2, '0' );
  el.seconds.textContent = String(seconds).padStart(2, '0');
}

export function countDown(){
  if(!state.isRunning){
    return
  }
  
  

  setTimeout(() => countDown(), 1000);
}