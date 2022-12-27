import createElement from './create_elements';
import margheritaPizza from '../assets/pizza1.png';

export default function menuFunction() {
  const menuButton = document.getElementById('menu');
  menuButton.addEventListener('pointerdown', () => {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = '';
    for (let index = 1; index < 5; index++) {
      createElement('div', 'main-content', 'menu-item', `menu-item${index}`, '50', '50');
      if (index === 1) {
        const thisElement = document.getElementById(`menu-item${index}`);
        createElement('p', thisElement.id, 'pizza-name', '', 20, 100, 'Chicago Style Pizza');
        createElement('img', thisElement.id, 'pizza-img', `pizza${index}`, 80, 100);
        const thisPizza = document.getElementById(`pizza${index}`);
        thisPizza.src = margheritaPizza;
      }
      if (index === 2) {
        const thisElement = document.getElementById(`menu-item${index}`);
        createElement('p', thisElement.id, 'pizza-name', '', 20, 100, 'New-York Style Pizza');
        createElement('img', thisElement.id, 'pizza-img', `pizza${index}`, 80, 100);
        const thisPizza = document.getElementById(`pizza${index}`);
        thisPizza.src = margheritaPizza;
      }
      if (index === 3) {
        const thisElement = document.getElementById(`menu-item${index}`);
        createElement('p', thisElement.id, 'pizza-name', '', 20, 100, 'Margherita Pizza');
        createElement('img', thisElement.id, 'pizza-img', `pizza${index}`, 80, 100);
        const thisPizza = document.getElementById(`pizza${index}`);
        thisPizza.src = margheritaPizza;
      }
      if (index === 4) {
        const thisElement = document.getElementById(`menu-item${index}`);
        createElement('p', thisElement.id, 'pizza-name', '', 20, 100, 'California Style Pizza');
        createElement('img', thisElement.id, 'pizza-img', `pizza${index}`, 80, 100);
        const thisPizza = document.getElementById(`pizza${index}`);
        thisPizza.src = margheritaPizza;
      }
    }
  });
}
