import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Greeter from './Greeter';
import LikeButton from './LikeButton';
import reportWebVitals from './reportWebVitals';

const Display = () => {
    let result = [];
    for (let i=0; i<10; i++){
        result.push(<LikeButton/ >);
    };
    return result;
}

ReactDOM.render(
  <React.StrictMode>
    <Greeter />
    <Display />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
