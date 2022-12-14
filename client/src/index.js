import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom"
import store from "./store"
import { Provider } from 'react-redux';
import {positions,transitions,Provider as AlertProvider} from "react-alert"
import AlertTemplate from "react-alert-template-basic"
const options = {
  timeout:4000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.FADE,
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store = {store}>
   <AlertProvider template = {AlertTemplate} {...options}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
   </AlertProvider>
 </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
