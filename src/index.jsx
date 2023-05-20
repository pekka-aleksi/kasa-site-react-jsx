import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/store/index";
import {Provider} from 'react-redux';
import {LinksProvider} from './linksContext';
import {TabProvider} from "./tabsContext";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <TabProvider>
        <LinksProvider>
          <App props={store}/>
        </LinksProvider>
      </TabProvider>
    </Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);

