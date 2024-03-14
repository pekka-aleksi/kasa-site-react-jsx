import React, {useEffect} from 'react';
import './site.css';

import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primereact/resources/themes/nova/theme.css';

import MyTabView from "./components/my-tabview";
import { useLinks, REQUESTLINKS, RECEIVELINKS } from './linksContext';

const App = () => {

  useEffect(() => {
    document.title = "Pekka Aleksi Kasa - Software Engineer and Data Scientist"
  }, []);

  const { state, dispatch } = useLinks();

  const getLinks = async (event) => {

    // Dispatch an action to start the request
    dispatch({ type: REQUESTLINKS });

    // Fetch links
    const response = await fetch(`${process.env.REACT_APP_API_URL}links/`);
    const json = await response.json();

    // Dispatch an action to save the links
    dispatch({ type: RECEIVELINKS, links: json });
  }

  return (
    <div>
      <div>
    <header className={"header_holder"}>
      <figure className={"mathpic"}></figure>
      <figure className={"programmer_logo"}></figure>
    </header>
      </div>
      <MyTabView linkState={state}></MyTabView>

      <footer><span>© 2024 Pekka Kasa</span></footer>
    </div>

  );
}

export default App;
