import createElement from './create_elements';
import './style.css';

export default function aboutUsFunction() {
  const mainContent = document.getElementById('main-content');
  mainContent.innerHTML = '';
  createElement('div', 'main-content', 'about-us-content', 'about-us-content', 100, 100);
  createElement('p', 'about-us-content', 'rest-name-p', '', 25, 100, 'Ishtar\'s  \n  𒈹');

  createElement('p', 'about-us-content', 'about-us-p', '', 75, 75);
  const thisP = document.querySelector('.about-us-p');
  thisP.innerText = "Ishtar's Pizzeria was established in 1980, in Baghdad, Iraq, by two friends who have a passion for making Pizza, our selection of Pizza is made with quality ingredients, hand-picked with passion and love, the dough is freshly made for each Pizza, and the cheese is made everyday at our Pizzeria.";

  const aboutUSButton = document.getElementById('about-us');
  aboutUSButton.addEventListener('pointerdown', () => {
    aboutUsFunction();
  });
}
