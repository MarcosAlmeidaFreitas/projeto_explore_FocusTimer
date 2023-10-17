let darkMode = true;
const buttonToggle = document.getElementById('toggle-mode');


buttonToggle.addEventListener('click', (event)=>{
  document.documentElement.classList.toggle('light');

  const mode = darkMode ? 'Dark' : 'Ligth';

  event.currentTarget.querySelector('span').textContent = `Ativar ${mode} Mode`
  darkMode = !darkMode;
})