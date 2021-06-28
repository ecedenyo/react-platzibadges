import { render } from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './global.css';

import BadgeNew from './pages/BadgeNew';

const container = document.getElementById('app');

render(<BadgeNew />, container);
