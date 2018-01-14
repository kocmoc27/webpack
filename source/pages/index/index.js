import './index.scss';
import createMenu from '../../components/menu';
import 'normalize.css';

var menu = createMenu(['Head','Portfolio','Contacts'], 'menu');
document.body.appendChild(menu);

console.log('this index.js');
console.log($);
console.log(jQuery);