import React, { useReducer, createContext, useContext } from 'react';

export const CHANGE_TAB = 'CHANGE_TAB';


const TabContext = createContext();

function tabReducer(state, action) {
  switch (action.type) {
    case CHANGE_TAB:
      return {
        ...state,
        activeTab: action.payload,
      };
    default:
      throw new Error();
  }
}


export function TabProvider({ children }) {
  const [state, dispatch] = useReducer(tabReducer, { activeTab: 0 });

  return (
    <TabContext.Provider value={{ state, dispatch }}>
      {children}
    </TabContext.Provider>
  );
}

export function useTab() {
  const context = useContext(TabContext);

  if (context === undefined) {
    throw new Error('useTab must be used within a TabProvider')
  }

  return context;
}
