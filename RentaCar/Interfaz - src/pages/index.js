import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Aquí puedes incluir los estilos globales de la aplicación
import App from './App';  // El componente principal de la aplicación
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
