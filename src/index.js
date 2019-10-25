import React from 'react';
import ReactDOM from 'react-dom';
import Scroll from './Scroll';
import './index.css';
import CardList from './CardList';
import './App.css'
import App from './App';
import * as serviceWorker from './serviceWorker'; 
import 'tachyons';
import {robots} from './Robots'; //robots exports more than one thing so you must wrap in curly braces. Different from export default.
ReactDOM.render(<App/>, document.getElementById('root'));
 /*** id, name, and email props used in card.js
  * Properties are added to a component, and then can be used for various things throughout app
  */



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
