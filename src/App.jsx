import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import fetchLinks from "./redux/actions/fetchlinks";
import MyTabView from "./components/my-tabview";


class App extends Component {
  constructor(props) {
    super(props);
  }

  onclick = (event) => {
    console.log("Clicked");
    this.props.fetchlinks();
  }

  render() {
    return (
      <div>
        <MyTabView></MyTabView>
        <button className={'spacy'} onClick={(event) => this.onclick(event)}>Fetch links</button>
        <pre>{JSON.stringify(process.env, null, 2)}</pre>
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
      </div>
    );
  }
}

const dispatch_to_props = (dispatch, ownprops) => {
  return {
    fetchlinks: () => dispatch(fetchLinks())
  }
}


export default connect(incoming => incoming, dispatch_to_props)(App);
