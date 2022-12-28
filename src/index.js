import createElement from './skeleton/create_elements';
import './style.css';
import menuFunction from './skeleton/menu';
import aboutUsFunction from './skeleton/aboutus';
import locationsFunction from './skeleton/locations';

createElement('div', 'body', 'header', 'header', '5', '100');
createElement('div', 'body', 'main-content', 'main-content', '80', '100');
createElement('div', 'body', 'footer', 'footer', '5', '100');
createElement('div', 'header', 'menu', 'menu', '100', '33', 'Menu');
createElement('div', 'header', 'about-us', 'about-us', '100', '33', 'About-Us');
createElement('div', 'header', 'locations', 'locations', '100', '33', 'Locations');

menuFunction();
aboutUsFunction();
locationsFunction();
