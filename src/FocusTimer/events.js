import { controls } from "./elements.js";
import * as actions from './actions.js';

export function registerControls(){
  controls.addEventListener('click', (event) =>{
    const action = event.target.dataset.action;

    // se o tipo de função que está presente na classe action não for do tipo função se retorna nada
    if(typeof actions[action] != 'function'){
      return
    }else{
      // caso for uma função execute a função que o usuario deseja
      actions[action]();
    }

    
  })
}