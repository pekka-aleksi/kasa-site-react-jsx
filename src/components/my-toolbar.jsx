import {Toolbar} from 'primereact/toolbar';

import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

class MyToolbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={'extra-bordered wide'}>


        <Toolbar className={'toolbar spacy bordered wide'}>
            <div className={'bordered'}>Main</div>
            <div className={'bordered'}>Links</div>
            <div className={'bordered'}>Second</div>
        </Toolbar>

      </div>
    );
  }
}

MyToolbar.propTypes = {};


const dispatch_to_props = (dispatch, ownprops) => {
  return {}
}

export default connect(null, dispatch_to_props)(MyToolbar);
