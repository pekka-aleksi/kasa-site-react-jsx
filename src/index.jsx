import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/store/index";
import { Provider } from 'react-redux';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App props={store}/>
    </Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);

