import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import {add, sub, mul, div} from './Calculator'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <ul>
    <li>Sum of two numbers is : {add(100, 100)}</li>
    <li>Subtraction of two numbers is : {sub(200, 100)}</li>
    <li>Multiplication of two numbers is : {mul(100, 100)}</li>
    <li>Division of two numbers is : {div(200, 100)}</li>
  </ul>
  </>
);