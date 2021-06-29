import { render } from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './global.css';

import App from './components/App';

const container = document.getElementById('app');

render(<App />, container);
