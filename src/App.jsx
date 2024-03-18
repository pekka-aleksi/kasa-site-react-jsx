import React, {useEffect} from 'react';
import './site.css';

import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primereact/resources/themes/nova/theme.css';

import MyTabView from "./components/my-tabview";
import {useBackend} from './backendContext';

const App = () => {

  useEffect(() => {
    document.title = "Pekka Aleksi Kasa - Software Engineer and Data Scientist"
  }, []);

  const { state, dispatch } = useBackend();


  return (
    <div>
      <div>
    <header className={"header_holder"}>
      <figure key="1" className={"mathpic"}></figure>
      <figure key="2" className={"programmer_logo"}></figure>
    </header>
      </div>
      <MyTabView paramstate={state}></MyTabView>

      <footer><span>© 2024 Pekka Kasa</span></footer>
    </div>

  );
}

export default App;
