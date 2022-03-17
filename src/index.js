import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './layouts/Main/Main';
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Main />
  </Router>,
  document.getElementById('root')
);

