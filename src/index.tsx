import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './page/index';
import reportWebVitals from './reportWebVitals';
// import apiHelper from "../api";
const apiHelper = '';
ReactDOM.render(
  <React.StrictMode>
    <App api={apiHelper} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
