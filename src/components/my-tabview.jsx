import {TabView, TabPanel} from 'primereact/tabview';

import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import change_tab from "../redux/actions/managetabs";

class MyTabView extends Component {
  constructor(props) {
    super(props);

    this.state = {activeIndex: 0}
  }

  onClick = (param) => {
    this.props.change_tab(param);
    console.log(`received ${param}`)
    this.setState({activeIndex: param})
  }

  render() {

    let content = "";

    switch (this.state.activeIndex) {
      case 0:
        content = "a"; break;
      case 1:
        content = "b"; break;
      case 2:
        content = " c"; break;
      default:
        content = "Something went wrong!"

    }

    return (
      <div className={'extra-bordered wide'}>
        <pre>this.state: {JSON.stringify(this.state, null, 2)}</pre>
        <pre>this.props: {JSON.stringify(this.props, null, 2)}</pre>


        <TabView activeIndex={this.state.activeIndex}
                 onTabChange={(e) => this.onClick(e.index)}>

          <TabPanel header={`Header ${this.state.activeIndex}`}>
            {content}
          </TabPanel>
          <TabPanel header={`Header ${this.state.activeIndex}`}>
            {content}
          </TabPanel>
          <TabPanel header={`Header ${this.state.activeIndex}`}>
            {content}
          </TabPanel>

        </TabView>


      </div>
    );
  }
}

MyTabView.propTypes = {activeIndex: PropTypes.number};


const dispatch_to_props = (dispatch, ownprops) => {
  return {
    change_tab: (newindex) => dispatch(change_tab(newindex))
  }
}
const state_to_props = (state, ownprops) => {

  console.log(state);
  return { state, ...ownprops };

}
export default connect(state_to_props, dispatch_to_props)(MyTabView);
