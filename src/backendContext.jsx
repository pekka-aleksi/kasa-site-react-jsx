import React, {createContext, useReducer, useEffect, useContext} from 'react';

export const REQUESTLINKS = 'REQUESTLINKS';
export const RECEIVELINKS = 'RECEIVELINKS';

export const REQUESTTILS = 'REQUESTTILS';
export const RECEIVETILS = 'RECEIVETILS';


const BackendContext = createContext();


function backendReducer(state, action) {
  switch (action.type) {
    case REQUESTLINKS:
      return {
        ...state,
        loading: true,
      };
    case RECEIVELINKS:
      return {
        ...state,
        loading: false,
        links: action.links,
      };
    case REQUESTTILS:
      return {
        ...state,
        loading: true
      };
    case RECEIVETILS:
      return {
        ...state,
        loading: false,
        tils: action.tils
      };

    default:
      throw new Error();
  }
}

const get_links = async (dispatch) => {

  dispatch({type: REQUESTLINKS});

  fetch(`${process.env.REACT_APP_API_URL}links/`)
    .then(response => {
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      return response.json();
    })
    .then(json => {
      console.log("There was no error!!!", json);
      dispatch({type: RECEIVELINKS, links: json});
    })
    .catch(error => {
      console.log('There was an error!', error);
    })

}


const get_tils = async (dispatch) => {

  dispatch({type: REQUESTTILS});

  fetch(`${process.env.REACT_APP_API_URL}tils/`)
    .then(response => {
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      return response.json();
    })
    .then(json => {
      console.log("There was no error!!!", json);
      dispatch({type: RECEIVETILS, tils: json});
    })
    .catch(error => {
      console.log('There was an error!', error);
    })

}

export function BackendProvider({children}) {

  const [state, dispatch] = useReducer(backendReducer, {links: [], loading: false});

  useEffect(() => {
    get_links(dispatch);
    get_tils(dispatch);
  }, []);


  return (
    <BackendContext.Provider value={{state, dispatch}}>
      {children}
    </BackendContext.Provider>
  );
}

export function useBackend() {
  const context = useContext(BackendContext);

  if (context === undefined) {
    throw new Error('useBackend must be used within a BackendProvider')
  }

  return context;
}
