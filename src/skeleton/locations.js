import createElement from './create_elements';

export default function locationsFunction() {
  const locationsButton = document.getElementById('locations');
  locationsButton.addEventListener('pointerdown', () => {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = '';
    createElement('div', 'main-content', 'locations-content', 'locations-header', 25, 100);
    createElement('p', 'locations-header', 'locations-header-p', '', 100, 100, 'Our Locations');
    createElement('div', 'main-content', 'locations-place', 'locations-one', 75, 50);

    createElement('p', 'locations-one', 'locations-place', 'iraq', '', '', 'الله اكبر');
    createElement('p', 'locations-one', 'locations-place', '', '', '', '315, Mashtal, Baghdad, Iraq');
  });
}
