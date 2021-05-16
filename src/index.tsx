import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, Link } from 'react-router-ts'

import './index.css';
import App from './page/Index';
import reportWebVitals from './reportWebVitals';
import apiHelper from "./api";



ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Route path="/" component={ App }  />
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
