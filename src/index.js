import { render } from 'react-dom';

const projectName = 'Platzi Badges';
const titulo = <h1>{projectName}</h1>;
const subtitulo = <h2>Hello, platzinautas!</h2>;

const content = (
  <div>
    {titulo}
    {subtitulo}
  </div>
);

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
render(content, container);
