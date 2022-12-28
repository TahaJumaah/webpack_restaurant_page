import createElement from './create_elements';
import margheritaPizza from '../assets/margherita.png';
import BBQChickenPizza from '../assets/BBQ_Chicken.png';
import broccoliPizza from '../assets/Broccoli.png';
import pepperoniPizza from '../assets/Pepperoni.png';

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
        createElement('div', thisElement.id, 'pizza-img-cont', `pizza-img-cont${index}`);
        createElement('img', `pizza-img-cont${index}`, 'pizza-img', `pizza${index}`, '', '');
        const thisPizza = document.getElementById(`pizza${index}`);
        thisPizza.src = margheritaPizza;
      }
      if (index === 2) {
        const thisElement = document.getElementById(`menu-item${index}`);
        createElement('p', thisElement.id, 'pizza-name', '', 20, 100, 'New-York Style Pizza');
        createElement('div', thisElement.id, 'pizza-img-cont', `pizza-img-cont${index}`);
        createElement('img', `pizza-img-cont${index}`, 'pizza-img', `pizza${index}`, '', '');
        const thisPizza = document.getElementById(`pizza${index}`);
        thisPizza.src = BBQChickenPizza;
      }
      if (index === 3) {
        const thisElement = document.getElementById(`menu-item${index}`);
        createElement('p', thisElement.id, 'pizza-name', '', 20, 100, 'Margherita Pizza');
        createElement('div', thisElement.id, 'pizza-img-cont', `pizza-img-cont${index}`);
        createElement('img', `pizza-img-cont${index}`, 'pizza-img', `pizza${index}`, '', '');
        const thisPizza = document.getElementById(`pizza${index}`);
        thisPizza.src = broccoliPizza;
      }
      if (index === 4) {
        const thisElement = document.getElementById(`menu-item${index}`);
        createElement('p', thisElement.id, 'pizza-name', '', 20, 100, 'California Style Pizza');
        createElement('div', thisElement.id, 'pizza-img-cont', `pizza-img-cont${index}`);
        createElement('img', `pizza-img-cont${index}`, 'pizza-img', `pizza${index}`, '', '');
        const thisPizza = document.getElementById(`pizza${index}`);
        thisPizza.src = pepperoniPizza;
      }
    }
  });
}
