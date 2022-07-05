import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let DItem = [
    {id: 1, name: "Phil"},
    {id: 2, name: "Anton"},
    {id: 3, name: "Petya"},
    {id: 4, name: "Vasya"}
];

let Mess = [
    {id: 1, mess: "Hi"},
    {id: 2, mess: "Men"},
    {id: 3, mess: "What`s up"}
];

let Posts = [
    {id:1, message: "Come on!", Like:2},
    {id:2, message: "Eee", Like: 4}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App DItem={DItem} Mess={Mess} Posts={Posts}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
