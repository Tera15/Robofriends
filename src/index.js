import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import { store } from './redux/store';
 
import './index.css';
import './App.css'
import App from './App';
import 'tachyons';


ReactDOM.render(
<Provider store={store}>
   <App/>
</Provider>, 
  document.getElementById('root'));
 



