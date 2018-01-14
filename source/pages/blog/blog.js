import './blog.scss';
import 'normalize.css';
import createMenu from '../../components/menu';
var menu = createMenu(['Head', 'Portfolio', 'BLOG'], 'menu');
document.body.appendChild(menu);

console.log('in blog.js')