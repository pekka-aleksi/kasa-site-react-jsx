import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {BackendProvider} from './backendContext';
import {TabProvider} from "./tabsContext";


ReactDOM.render(
  <React.StrictMode>

      <TabProvider>
        <BackendProvider>
          <App/>
        </BackendProvider>
      </TabProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

