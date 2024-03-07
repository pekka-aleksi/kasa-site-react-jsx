import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {useTab, CHANGE_TAB} from '../tabsContext';
import {TabMenu} from "primereact/tabmenu";

import 'primeicons/primeicons.css';


const FRONT_PAGE_INDEX = 0;
const LINK_PAGE_INDEX = 1;
const ABOUT_ME_INDEX = 2;
const POSTS_INDEX = 3;

//Use in a component

const MyTabView = ({activeIndex: activeIndexProp, change_tab, linkState}) => {
  const [activeIndex, setActiveIndex] = useState(activeIndexProp || LINK_PAGE_INDEX);


  const {state, dispatch} = useTab();


  const changeTab = (param) => {
    dispatch({type: CHANGE_TAB, payload: param});

    console.log(`received ${param}`);
    setActiveIndex(param);
  }

  useEffect(() => {
    console.log(`activeIndex changed to ${activeIndex}`);
  }, [activeIndex]);

  let content = "";

  switch (activeIndex) {
    case FRONT_PAGE_INDEX:
      content = <section>
        <header><h1>Hello Friend</h1></header>

        <p>Welcome to my website.</p>
        <p>Here you can find links to the web, and a little bit about me.</p>
        <p>Feel free to look around.</p>
      </section>;

      break;

    case LINK_PAGE_INDEX:

      const linklist = Object.values(linkState["links"]).map((link, index) => {
        return <div className={"linkdiv"}>

          <div className={"linkheader"}>
            <h2><a key={index} href={link.link}>{link["link"]}</a></h2> (added {new Date(link.date).toLocaleDateString()})
            <p className={"linktext"}>{link["description"]}</p>
          </div>

        </div>
      });

      content = <section>
        <header><h1>Sharing is Caring</h1></header>

        <p>Here are some links to the web that I find interesting.</p>
        <section className={"linksection"}>{linklist}</section>
      </section>
      break;
    case POSTS_INDEX:
      content = <section>
        <header><h1>Posts</h1></header>

        <p>Here are some posts that I have written.</p>
      </section>;
      break;

    case ABOUT_ME_INDEX:
      content = <section>
        <header><h1>Who am I</h1></header>

        <p>My name is Pekka Aleksi Kasa. I'm a native Finn who was born in Jyväskylä.</p>

        <p>What I'm doing right now is studying programming and (mostly) mathematics. I'm working on my bachelor's
          degree (mathematics) during 2024.</p>
        <p>The end goal for this is hopefully to be working with really cool problems - while getting compensated for
          the time lost.</p>
        <p>I like to express myself through the things I find worth sharing. The links on this website try to show those
          things.</p>

        <figure className={"python_kitty"}></figure>
      </section>;

      break;
    default:
      content = "Something went wrong!";
  }

  const items = [
    {label: 'Frontpage', icon: 'pi pi-fw pi-home', command: () => changeTab(FRONT_PAGE_INDEX)},
    {label: 'Links', icon: 'pi pi-fw pi-link', command: () => changeTab(LINK_PAGE_INDEX)},
    {label: 'About Me', icon: 'pi pi-fw pi-user', command: () => changeTab(ABOUT_ME_INDEX)},
    {label: 'Posts', icon: 'pi pi-fw pi-pencil', command: () => changeTab(POSTS_INDEX)}
  ]

  return (

    <div className={"floatdiv"}>
      <div className={"navdiv"}>

        <nav>
          <TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
          </TabMenu>
        </nav>
      </div>

      <main>{content}</main>

    </div>
  );
}

MyTabView.propTypes = {activeIndex: PropTypes.number};

export default MyTabView;
