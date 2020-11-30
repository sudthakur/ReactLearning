import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Maincomp from './Maincomp';
import UseEffectHooks from './UseEffectHooks';
import Challenge7useEffect from './Challenge7useEffect';
import Pokemonapi from './Pokemonapi';
import {BrowserRouter} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Maincomp></Maincomp> */}
    {/* <UseEffectHooks></UseEffectHooks> */}
    {/* <Challenge7useEffect></Challenge7useEffect> */}
    {/* <Pokemonapi></Pokemonapi> */}
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
