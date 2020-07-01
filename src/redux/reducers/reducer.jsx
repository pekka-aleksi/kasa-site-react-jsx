import {createReducer} from '@reduxjs/toolkit'
import {FETCHLINKS} from "../actions/fetchlinks";
import do_fetch from "../actions/fetchlinks";

let counter = 0;
export default createReducer({}, {
  [FETCHLINKS]:  (state, action) =>  {
    counter += 1;
    do_fetch(state, action)
  },
  ADDLINKS: (state, action) => {
    Object.assign(state['links'], {[counter]: [action.payload] });
  }
});
