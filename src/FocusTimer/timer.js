import state from "./state.js"
import * as el from './elements.js'
import { reset } from "./actions.js";

export function updateDisplay(minutes, seconds){
  //se caso caso a variavel minutes do cabeçalho da função for nulo, 
  //o operador ?? está dizendo que ele vai preencher com o state.minutes 
  minutes = minutes ?? state.minutes;

  seconds = seconds ?? state.seconds;

  el.minutes.textContent = String(minutes).padStart(2, '0' );
  el.seconds.textContent = String(seconds).padStart(2, '0');
}


export function countDown(){
  // se caso o estado is running mudar para false ele vai parar 
  //a função retornando nada 
  if(!state.isRunning){
    return
  }
  //se caso não for ele executa o codigo a baixo e faz uma callback function chamando ela mesmo novamnete até conseguir para entrando if()
  
  let minutes = Number(el.minutes.textContent);
  let seconds = Number(el.seconds.textContent);

  seconds--

  if(minutes != 0 && seconds < 0  ){
    seconds = 59;
    minutes--;
  }else if(minutes == 0 && seconds == 0){
    reset();
    
    return
  }

  // }else if(minutes == 0 && seconds < 0){
  //   reset();
  //   return
  // }


  updateDisplay(minutes, seconds)

  setTimeout(() => countDown(), 1000);
}