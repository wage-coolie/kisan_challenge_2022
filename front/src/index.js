import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.js";
import axios from 'axios';

// axios base url
axios.defaults.baseURL = 'https://fast-plateau-20570.herokuapp.com/';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


