let y = 500;
let x = 100;


const hero = document.querySelector('.hero');
hero.style.top = y + 'px';
hero.style.left = x + 'px';


const ghost = document.querySelector('.ghost');
ghost.style.top = '200px';
ghost.style.left = '600px';

const treasure = document.querySelector('.treasure');
treasure.style.top = '0px';
treasure.style.left = '400px';


document.addEventListener('keyup', (e) => {
  if (e.code === 'ArrowUp' || e.code === 'KeyW') {
    y = y - 100
    hero.style.top = y + 'px';
  } else if (e.code === 'ArrowDown' || e.code === 'KeyS') {
     y = y + 100
    hero.style.top = y + 'px'
  } else if (e.code === 'ArrowLeft' || e.code === 'KeyA') {
    x = x - 100
    hero.style.left = x + 'px'
  } else if (e.code === 'ArrowRight' || e.code === 'KeyS') {
    x = x + 100
    hero.style.left = x + 'px';
  }
})