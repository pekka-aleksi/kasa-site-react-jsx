import {TabView, TabPanel} from 'primereact/tabview';

import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTab, CHANGE_TAB } from '../tabsContext';





const MyTabView = ({ activeIndex: activeIndexProp, change_tab }) => {
  const [activeIndex, setActiveIndex] = useState(activeIndexProp || 0);


  const { state, dispatch } = useTab();



  const onClick = (param) => {
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
      content = <div className={"bordered tall"}>
        Hello Friend
      </div>;

      break;

    case 1:
      content = <div className={"bordered tall"}>
          Links
      </div>
      break;
    case 2:
      content = <div className={"bordered tall"}>
        Who am I?
      </div>;

      break;
    default:
      content = "Something went wrong!";
  }

  return (
    <div className={'extra-bordered wide'}>
      <pre>this.state: {JSON.stringify({ activeIndex }, null, 2)}</pre>

      <TabView activeIndex={activeIndex} onTabChange={(e) => onClick(e.index)}>
        <TabPanel header={`Header ${activeIndex}`}>
          {content}
        </TabPanel>
        <TabPanel header={`Header ${activeIndex}`}>
          {content}
        </TabPanel>
        <TabPanel header={`Header ${activeIndex}`}>
          {content}
        </TabPanel>
      </TabView>
    </div>
  );
}

MyTabView.propTypes = { activeIndex: PropTypes.number };

export default MyTabView;
