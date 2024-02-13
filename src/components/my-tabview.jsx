import {TabView, TabPanel} from 'primereact/tabview';



import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTab, CHANGE_TAB } from '../tabsContext';

//Use in a component

const MyTabView = ({ activeIndex: activeIndexProp, change_tab, linkState}) => {
  const [activeIndex, setActiveIndex] = useState(activeIndexProp || 2);


  const { state, dispatch } = useTab();


  const changeTab = (param) => {
    dispatch({ type: CHANGE_TAB, payload: param });

    console.log(`received ${param}`);
    setActiveIndex(param);
  }

  useEffect(() => {
    console.log(`activeIndex changed to ${activeIndex}`);
  }, [activeIndex]);

  let content = "";

  switch (activeIndex) {
    case 0:
      content = <section className={"bordered tall cover"}>
        <header><h1>Hello Friend</h1></header>

        <p>Welcome to my website.</p>
        <p>Here you can find links to the web, and a little bit about me.</p>
      </section>;

      break;

    case 1:
      content = <section className={"bordered tall cover"}>
        <header><h1>Sharing is Caring</h1></header>
      </section>
      break;
    case 2:
      content = <section>
        <header><h1>Who am I</h1></header>

        <p>My name is Pekka Aleksi Kasa. I'm a native Finn who was born in Jyväskylä.</p>
        <p>I'm fairly analytical. My hobbies include playing Magic: the Gathering and programming. I like challenging myself to learn new things.</p>
        <p>I like to express myself through the things I see. The links on this website try to show the things I find.</p>
        <figure className={"python_kitty"}></figure>
      </section>;

      break;
    default:
      content = "Something went wrong!";
  }
  return (
    <nav className={'extra-bordered wide cover-outer'}>

      <TabView

        activeIndex={activeIndex}
        onTabChange={(e) => changeTab(e.index)}>

        <TabPanel className={{}} header={`Frontpage`}>
          <main>{content}</main>
        </TabPanel>
        <TabPanel header={`Links to the Web`}>
          <main>{content}</main>
        </TabPanel>
        <TabPanel header={`Who am I?`}>
          <main>{content}</main>
        </TabPanel>
      </TabView>

      <aside className={"bordered wide cover"}>
        <pre>{JSON.stringify(process.env, null, 2)}</pre>
        <pre>{JSON.stringify(process.env.REACT_APP_API_URL)}</pre>
        <pre>{JSON.stringify(linkState.links, null, 2)}</pre>
      </aside>
    </nav>
  );
}

MyTabView.propTypes = {activeIndex: PropTypes.number};

export default MyTabView;
