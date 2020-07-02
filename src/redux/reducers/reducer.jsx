import {createReducer} from '@reduxjs/toolkit'
import {REQUESTLINKS, RECEIVELINKS} from "../actions/fetchlinks";
import {CHANGE_TAB} from "../actions/managetabs";

let counter = 0;
export default createReducer({}, {
  [REQUESTLINKS]:  (state, action) =>  {
    Object.assign(state, {fetching: true});
  },
  [RECEIVELINKS]: (state, action) => {
    Object.assign(state, {fetching: false});
    Object.assign(state['links'], {[counter]: [action.links] });
  },
  [CHANGE_TAB]: (state, action) => {
    state['activeIndex'] = action.payload;
  }

});
