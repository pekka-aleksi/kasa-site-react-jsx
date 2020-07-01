import {configureStore} from "@reduxjs/toolkit";

import thunk from 'redux-thunk';

import rootReducer from "../reducers/reducer";

const initialstate = {
  links: {}
};

export default configureStore({
  reducer: rootReducer,
  preloadedState: initialstate,
  middleware: [thunk],
});
