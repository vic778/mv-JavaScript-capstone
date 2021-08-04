import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/style.scss';
import { showsList } from './UX/cards';
import { involvement } from './API/Involvement';

showsList.renderCards();
involvement.setLike(1);
console.log(involvement.getLikes());
