function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputCreate = document.querySelector('input');
console.log(inputCreate);
const btnCreate = document.querySelector('[data-create]');
console.log(btnCreate);
const btnDestroy = document.querySelector('[data-destroy]');

btnCreate.addEventListener('click', () => {
  
})