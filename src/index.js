import { render } from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './global.css';

import Badge from './components/Badge';

const container = document.getElementById('app');

render(<Badge />, container);
