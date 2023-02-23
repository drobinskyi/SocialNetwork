import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  {id: 1 , message: "Hi, how are you?", likesCount: 12},
  {id: 2 , message: "It's my first post", likesCount: 23}
];

let dialogs = [
  {id: 1 , name: 'Dmytro'},
  {id: 2 , name: 'Andriy'},
  {id: 3 , name: 'Svitlana'},
  {id: 4 , name: 'Sasha'},
  {id: 5 , name: 'Viktor'}
];

let messages = [
  {id: 1 , message: 'Hi', key: 11},
  {id: 2 , message: 'How is your day?', key: 12},
  {id: 3 , message: 'Nice!', key: 13},
  {id: 4 , message: 'Ok', key: 14},
  {id: 5 , message: 'At least I tried', key: 15}
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App myPosts={ posts } myDialogs={ dialogs } myMessages={ messages } />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
