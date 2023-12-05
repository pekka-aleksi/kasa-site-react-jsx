import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {LinksProvider} from './linksContext';
import {TabProvider} from "./tabsContext";


ReactDOM.render(
  <React.StrictMode>

      <TabProvider>
        <LinksProvider>
          <App/>
        </LinksProvider>
      </TabProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

