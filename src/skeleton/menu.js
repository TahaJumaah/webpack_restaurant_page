import createElement from './create_elements';

export default function menuFunction() {
  const menuButton = document.getElementById('menu');
  menuButton.addEventListener('pointerdown', () => {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = '';
    for (let index = 1; index < 5; index++) {
      createElement('div', 'main-content', 'menu-item', `menu-item${index}`, '50', '50');
      if (index === 1) {
        const thisElement = document.getElementById(`menu-item${index}`);
        thisElement.style.backgroundColor = 'pink';
      }
      if (index === 2) {
        const thisElement = document.getElementById(`menu-item${index}`);
        thisElement.style.backgroundColor = 'red';
      }
      if (index === 3) {
        const thisElement = document.getElementById(`menu-item${index}`);
        thisElement.style.backgroundColor = 'blue';
      }
      if (index === 4) {
        const thisElement = document.getElementById(`menu-item${index}`);
        thisElement.style.backgroundColor = 'orange';
      }
    }
  });
}
