import { controls } from "./elements.js";
import * as actions from './actions.js';
import * as el from './elements.js';
import state from "./state.js";
import { updateDisplay } from "./timer.js";

export function registerControls(){
  controls.addEventListener('click', (event) =>{
    const action = event.target.dataset.action;

    // se o tipo de função que está presente na classe action não for do tipo função se retorna nada
    if(typeof actions[action] != 'function'){
      return
    }else{
      // caso for uma função execute a função que o usuario deseja
      actions[action]();
      console.log(actions[action]) 
    }

  });
}

export function setMinutes(){
  el.minutes.addEventListener('focus', () => {
    el.minutes.textContent('');
  });

  // Fazendo com que seja 'ouvida' a teclas, e com essa expressão regular o campo só vai aceitar numeros '
  el.minutes.onkeypress = (event) => /\d/.test(event.key);
  el.minutes.addEventListener('blur', (event)=>{
    let time = event.currentTarget.textContent;
    time = time > 60 ? 60 : time
    state.minutes = time;
    state.seconds = 0;

    updateDisplay();
    el.minutes.removeAttribute('contenteditable');
  });
}