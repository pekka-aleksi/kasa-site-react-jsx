import React, {createContext, useReducer, useEffect, useContext} from 'react';

export const REQUESTLINKS = 'REQUESTLINKS';
export const RECEIVELINKS = 'RECEIVELINKS';

const LinksContext = createContext();


function linksReducer(state, action) {
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
    default:
      throw new Error();
  }
}
const thing = async (dispatch) => {

  dispatch({type: REQUESTLINKS});

  fetch(`${process.env.REACT_APP_API_URL}links`)
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

export function LinksProvider({children}) {

  const [state, dispatch] = useReducer(linksReducer, {links: [], loading: false});

  useEffect(() => {thing(dispatch)}, []);


  return (
    <LinksContext.Provider value={{state, dispatch}}>
      {children}
    </LinksContext.Provider>
  );
}

export function useLinks() {
  const context = useContext(LinksContext);

  if (context === undefined) {
    throw new Error('useLinks must be used within a LinksProvider')
  }

  return context;
}
