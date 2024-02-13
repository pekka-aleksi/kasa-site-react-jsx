import React from 'react';
import './site.css';

import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primereact/resources/themes/nova-light/theme.css';

import MyTabView from "./components/my-tabview";
import { useLinks, REQUESTLINKS, RECEIVELINKS } from './linksContext';

const App = () => {
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
    <header>
      <figure className={"programmer_logo"}></figure>
      <MyTabView linkState={state}></MyTabView>
    </header>

  );
}

export default App;
