import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {useTab, CHANGE_TAB} from '../tabsContext';
import {TabMenu} from "primereact/tabmenu";

import 'primeicons/primeicons.css';
// TODO: add the Quill editor to the project -- this is for styling the TILs
// https://quilljs.com/docs/installation/

const FRONT_PAGE_INDEX = 0;
const LINK_PAGE_INDEX = 1;
const ABOUT_ME_INDEX = 2;
const POSTS_INDEX = 3;

//Use in a component

const MyTabView = ({activeIndex: activeIndexProp, paramstate}) => {

  const [activeIndex, setActiveIndex] = useState(activeIndexProp || FRONT_PAGE_INDEX);


  const {state, dispatch} = useTab();


  const changeTab = (param) => {
    dispatch({type: CHANGE_TAB, payload: param});
    setActiveIndex(param);
  }

  useEffect(() => {
  }, []);

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

      const linklist = Object.values(paramstate.links).map((link, index) => {
        return <div key={index} className={"linkdiv"}>

          <div className={"linkheader"}>
            <h2><a key={index} href={link.href}>{link.text}</a></h2> (added {new Date(link.date).toLocaleDateString()})
          </div>
          <div key={index} className={"linktext"}>
            <p>{link.description}</p>
          </div>

        </div>
      });

      content = <section>
        <header><h1>Sharing is Caring</h1></header>

        <p>Here are some links to the web that I find interesting.</p>
        <section className={"linksection"}>{linklist.length ? linklist : "No links (This will be fixed!)"}</section>
      </section>
      break;

    case POSTS_INDEX:
      content = <section>
        <header><h1>Today I Learned</h1></header>

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

        <section className={"linksection"}>
          <div className={"linkdiv"}>
            <div className={"linkheader"}>

              <h2>My GitHub Profile</h2>
              <div className={"linktext "}>

                  <span className={"pi pi-github"}></span> - Github
                  <h2><a key="1" href="https://github.com/pekka-aleksi/">github.com/pekka-aleksi</a></h2>

              </div>
            </div>
          </div>

          <div className={"linkdiv"}>
            <div className={"linkheader"}>

              <h2>My LinkedIn Profile</h2>
              <div className={"linktext "}>
                  <div className={"pi pi-linkedin"}></div> - LinkedIn
                  <h2><a key="2" href="https://www.linkedin.com/in/pekka-kasa-681927125/">linkedin profile</a></h2>
              </div>
            </div>
          </div>


        </section>

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
    {label: 'TIL', icon: 'pi pi-fw pi-pencil', command: () => changeTab(POSTS_INDEX)}
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
