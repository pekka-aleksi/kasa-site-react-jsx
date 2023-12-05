import React from 'react';
import './App.css';
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
    <div>
      <MyTabView linkState={state}></MyTabView>
    </div>
  );
}

export default App;
